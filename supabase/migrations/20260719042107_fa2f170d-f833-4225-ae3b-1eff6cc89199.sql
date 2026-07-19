GRANT INSERT ON public.surveys TO anon, authenticated;
GRANT SELECT ON public.surveys TO authenticated;
GRANT ALL ON public.surveys TO service_role;
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;