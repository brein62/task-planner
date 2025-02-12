import { useAuth } from "@/contexts/authContext";
import { Navigate } from "react-router";

/**
 * A wrapper around routes that should only be accessed by not logged-in users.
 * If a user is logged in, automatically navigates to `/`.
 *
 * Usage:
 * ```
 * <PublicRoute>
 *   <SignupPage />
 * </PublicRoute>
 * ```
 */
export default function PublicRoute({ children }: { children: React.ReactNode }) {
  const { auth } = useAuth();

  return !auth.isLoggedIn ? <>{children}</> : <Navigate to="/" />;
}