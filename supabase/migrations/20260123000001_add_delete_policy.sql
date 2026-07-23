-- ============================================
-- ADD DELETE POLICY FOR SURVEYS
-- ============================================

-- Grant DELETE permission
GRANT DELETE ON public.surveys TO authenticated;

-- Create DELETE policy
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON public.surveys;

CREATE POLICY "Enable delete for authenticated users"
ON public.surveys
FOR DELETE
TO authenticated
USING (true);

-- Verify the policy was added
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual::text as condition
FROM pg_policies 
WHERE tablename = 'surveys'
AND cmd = 'DELETE';