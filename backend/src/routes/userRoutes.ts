// External libraries
import { Router } from "express";

// Internal project modules
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  updateUserPrivilege,
} from "../controllers/userController";
import { adminProtectRoute, protectRoute } from "../middlewares/protectRoute";

const userRouter: Router = Router();

/**
 * @route POST /
 * @description Creates a new user
 * @access Public
 *
 * Endpoint to create a new user with the provided username, email, and password.
 * This route is not protected as it is intended for new users to register.
 */
userRouter.post("/", createUser);

/**
 * @route GET /:id
 * @description Retrieves a specific user by ID
 * @access Protected (Normal User)
 *
 * Requires the user to be authenticated. Returns user data for the given user ID.
 */
userRouter.get("/:id", protectRoute, getUser);

/**
 * @route GET /
 * @description Retrieves all users
 * @access Protected (Normal User)
 *
 * Requires the user to be authenticated. Returns a list of all users in the database.
 */
userRouter.get("/", protectRoute, getAllUsers);

/**
 * @route PATCH /update
 * @description Updates the authenticated user's information
 * @access Protected (Normal User)
 *
 * Requires the user to be authenticated. Allows the user to update their own profile information.
 */
userRouter.patch("/update", protectRoute, updateUser);

/**
 * @route DELETE /:id
 * @description Deletes a specific user by ID
 * @access Protected (Normal User)
 *
 * Requires the user to be authenticated. Deletes the user with the specified ID.
 */
userRouter.delete("/:id", protectRoute, deleteUser);

/**
 * Admin-Protected Routes
 *
 * This route is restricted to admin users only. The `adminProtectRoute` middleware
 * is used in addition to `protectRoute` to ensure the user is both authenticated and has admin privileges.
 */

/**
 * @route PATCH /:id/privilege
 * @description Updates the privilege level of a specific user by ID
 * @access Protected (Admin Only)
 *
 * Allows admin users to update the privilege level of a specific user.
 *
 * Body:
 * - `isAdmin` (boolean): Specifies whether the user should be granted admin privileges.
 */
userRouter.patch(
  "/:id/privilege",
  protectRoute,
  adminProtectRoute,
  updateUserPrivilege
);

export default userRouter;
