import { useAuth } from "@/contexts/authContext";
import PrivateRoute from "./PrivateRoute";

/**
 * A wrapper around routes that should only be accessed by admins. Admin routes
 * implicitly contain the `PrivateRoute` component, so you do not have to further
 * wrap the route around the `PrivateRoute` component.
 *
 * If a user is an admin, navigates to the component represented by prop `adminRoute`.
 *
 * If a user is not an admin, navigates to the component represented by prop `nonAdminRoute`.
 *
 * Usage:
 * ```
 * <AdminRoute
 *   adminRoute={ <EditQuestionPage /> }
 *   nonAdminRoute={ <ViewQuestionPage /> }
 * />
 * ```
 */
export default function AdminRoute({
  adminRoute,
  nonAdminRoute,
}: {
  adminRoute: React.ReactNode;
  nonAdminRoute: React.ReactNode;
}) {
  const { auth } = useAuth();

  return auth.isAdmin ? (
    <PrivateRoute>{adminRoute}</PrivateRoute>
  ) : (
    <PrivateRoute>{nonAdminRoute}</PrivateRoute>
  );
}