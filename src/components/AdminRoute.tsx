import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user?.isAdmin) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}