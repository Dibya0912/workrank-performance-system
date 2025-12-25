import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth();

  // not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // wrong role
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
