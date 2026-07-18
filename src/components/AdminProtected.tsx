import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '@/hooks/useAdminAuth';

export const AdminProtected = ({ children }: { children: ReactNode }) => {
  const { session, isAdmin, loading } = useAdminAuth();
  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading…</div>;
  if (!session || !isAdmin) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
};
