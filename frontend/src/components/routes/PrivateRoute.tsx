import { useAuth } from "@/contexts/authContext";
import { Navigate } from "react-router";

/**
 * A wrapper around routes that should only be accessed by logged-in users.
 * If a user is not logged in, automatically navigates to `/login`.
 *
 * Usage:
 * ```
 * <PrivateRoute>
 *   <QuestionList />
 * </PrivateRoute>
 * ```
 */
export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { auth } = useAuth();

  return auth.isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
}