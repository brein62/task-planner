export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  numberOfFailedLoginAttempts: number;
  passwordResetToken?: string;
  passwordResetTokenExpiration?: Date;
  isAdmin: boolean;
}

import axios from "axios";

interface LoginResponse {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  message: string;
}

export interface ApiResponse {
  message: string;
}

interface UserResponse {
  message: string;
  data: User;
}

interface UsersResponse {
  message: string;
  data: User[];
}

interface UsernameEmailResponse {
  username: string;
  email: string;
}

const authApi = axios.create({
  baseURL: "http://localhost:4000/auth",
  withCredentials: true,
});

const api = axios.create({
  baseURL: "http://localhost:4000/users",
  withCredentials: true,
});

/**
 * An async function for sending a login request to the backend.
 * @param email The email address.
 * @param password The password.
 * @param captcha The captcha value (when required).
 * @returns An object containing the HTTP status code of the request, the responded message from the backend and the user's information.
 */
async function sendLoginRequest(email: string, password: string) {
  const loginData = {
    email: email,
    password: password,
  };
  return await authApi
    .post<LoginResponse>("/login", loginData)
    .then((response) => {
      const userInfo = {
        id: response.data.id,
        isAdmin: response.data.isAdmin ? true : false,
        username: response.data.username,
        email: response.data.email,
      };
      return {
        status: response.status,
        message: response.data.message,
        userInfo: userInfo,
      };
    })
    .catch((error: any) => {
      return {
        status: error.status,
        message: error.response.data.message,
        userInfo: null,
      };
    });
}

/**
 * An async function for sending a forgot password request to the backend.
 * @param emailAddress The email address of the account for resetting password.
 * @returns An object containing the HTTP status code of the request and the responded message from the backend.
 */
async function sendForgotPasswordRequest(emailAddress: string) {
  const requestBody = {
    email: emailAddress,
  };
  return await authApi
    .post<ApiResponse>("/forgot-password", requestBody)
    .then((response) => {
      const data = response.data;
      return { status: response.status, message: data.message };
    })
    .catch((error) => {
      return { status: error.status, message: error.response.data.message };
    });
}

/**
 * An async function for sending a signup request to the backend.
 * @param username The username.
 * @param emailAddress The email address.
 * @param password The password.
 * @returns An object containing the HTTP status code of the request and the responded message from the backend.
 */
async function sendSignupRequest(
  username: string,
  emailAddress: string,
  password: string
) {
  const signupData = {
    username: username,
    email: emailAddress,
    password: password,
  };

  console.log(signupData);
  try {
    const response = await api.post<ApiResponse>("/", signupData);
    return { status: response.status, message: response.data.message };
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

/**
 * An async function to send a logout request to the backend.
 *
 * @returns An object containing the HTTP status code of the request and the responded message from the backend.
 */
async function sendLogoutRequest() {
  try {
    const response = await authApi.post<ApiResponse>("/logout", {});
    return { status: response.status, message: response.data.message };
  } catch (error: any) {
    console.error("Logout error:", error);
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

async function getUserById(id: string) {
  try {
    const response = await api.get<UserResponse>(`/${id}`);
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    console.error("Error retrieving user", error);
    return {
      status: error.response.status,
      message: error.response.data.message,
      data: {} as User,
    };
  }
}

/**
 * An async function that gets the list of users from the backend.
 */
async function getUsers() {
  try {
    const response = await api.get<UsersResponse>("/");
    return {
      status: response.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: any) {
    console.error("Error when retrieving user list", error);
    return {
      status: error.response.status,
      message: error.response.data.message,
      data: error.response.data.data,
    };
  }
}

/**
 * An async function that gets the user by the password reset token.
 */
async function getUserFromToken(token: string) {
  try {
    const response = await authApi.get<UsernameEmailResponse>(
      "/reset-password/" + token
    );
    return {
      status: response.status,
      username: response.data.username,
      email: response.data.email,
    };
  } catch (error: any) {
    console.error("Error when retrieving user from token", error);
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

/**
 * An async function that resets a password given the token and new password.
 */
async function resetPassword(token: string, password: string) {
  const resetPasswordData = {
    password: password,
  };
  try {
    const response = await authApi.post<ApiResponse>(
      "/reset-password/" + token,
      resetPasswordData
    );
    return { status: response.status, message: response.data.message };
  } catch (error: any) {
    console.error("Error when resetting password", error);
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

/**
 * An async function that updates a user's details.
 */
async function updateAccount(details: {
  id: string;
  username?: string;
  email?: string;
  newPassword?: string;
}) {
  const updateAccountData = details;
  try {
    const response = await api.patch<ApiResponse>("/update", updateAccountData);
    console.log("Successfully updated account!");
    return { status: response.status, message: response.data.message };
  } catch (error: any) {
    console.error("Error when updating account", error);
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

/**
 * An async function that deletes a user given the user ID.
 */
async function deleteAccount(id: string) {
  try {
    const response = await api.delete<ApiResponse>("/" + id);
    return { status: response.status, message: response.data.message };
  } catch (error: any) {
    console.error(`Error when deleting account ID ${id}\n`, error);
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

/**
 * An async function to update a specific user's privilege given the user ID.
 */
async function updateUserPrivilege(id: string, isAdmin: boolean) {
  try {
    const response = await api.patch<ApiResponse>("/" + id + "/privilege", {
      isAdmin: isAdmin,
    });
    return { status: response.status, message: response.data.message };
  } catch (error: any) {
    console.error(`Error when updating privilege of account ID ${id}\n`, error);
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
}

export {
  sendLoginRequest,
  sendForgotPasswordRequest,
  sendSignupRequest,
  sendLogoutRequest,
  getUsers,
  getUserById,
  getUserFromToken,
  resetPassword,
  updateAccount,
  deleteAccount,
  updateUserPrivilege,
};
