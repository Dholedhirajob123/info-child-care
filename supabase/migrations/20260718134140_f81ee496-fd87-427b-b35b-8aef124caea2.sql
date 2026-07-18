
-- App role enum + secure has_role function
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Surveys table: parent info + answers + score
CREATE TABLE public.surveys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  parent_email text NOT NULL,
  gender text NOT NULL,
  answers jsonb NOT NULL DEFAULT '[]'::jsonb,
  score integer NOT NULL DEFAULT 0,
  total integer NOT NULL DEFAULT 0,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.surveys TO anon, authenticated;
GRANT SELECT ON public.surveys TO authenticated;
GRANT ALL ON public.surveys TO service_role;

ALTER TABLE public.surveys ENABLE ROW LEVEL SECURITY;

-- Anyone (even unauthenticated) can submit a survey
CREATE POLICY "Anyone can submit a survey"
ON public.surveys FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can view submissions
CREATE POLICY "Admins can view all surveys"
ON public.surveys FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX surveys_submitted_at_idx ON public.surveys (submitted_at DESC);
CREATE INDEX surveys_parent_email_idx ON public.surveys (parent_email);
