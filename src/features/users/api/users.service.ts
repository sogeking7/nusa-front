import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import {
  CreateUser,
  CreateUserResponse,
  DeleteUserById,
  DeleteUserByIdResponse,
  DeleteUserMe,
  DeleteUserMeResponse,
  GetUserById,
  GetUserByIdResponse,
  GetUserMe,
  GetUserMeResponse,
  GetUsers,
  GetUsersResponse,
  RegisterUser,
  RegisterUserResponse,
  UpdatePasswordMe,
  UpdatePasswordMeResponse,
  UpdateUserById,
  UpdateUserByIdResponse,
  UpdateUserMe,
  UpdateUserMeResponse,
} from "./users.service.types";

export const UsersService = () => {
  const url = "/users";

  const getUsers: GetUsers = async () => {
    try {
      const { data } = await apiPayload().get<GetUsersResponse>(`${url}/`);
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const createUser: CreateUser = async () => {
    try {
      const { data } = await apiPayload().post<CreateUserResponse>(`${url}/`);
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const getUserMe: GetUserMe = async () => {
    try {
      const { data } = await apiPayload().get<GetUserMeResponse>(`${url}/me`);
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const deleteUserMe: DeleteUserMe = async () => {
    try {
      const { data } = await apiPayload().delete<DeleteUserMeResponse>(
        `${url}/me`,
      );
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };
  const updateUserMe: UpdateUserMe = async () => {
    try {
      const { data } = await apiPayload().patch<UpdateUserMeResponse>(
        `${url}/me`,
      );
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const updatePasswordMe: UpdatePasswordMe = async () => {
    try {
      const { data } = await apiPayload().patch<UpdatePasswordMeResponse>(
        `${url}/me/password`,
      );
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const registerUser: RegisterUser = async () => {
    try {
      const { data } = await apiPayload().post<RegisterUserResponse>(
        `${url}/signup`,
      );
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const getUserById: GetUserById = async () => {
    try {
      const { data } = await apiPayload().post<GetUserByIdResponse>(`${url}/`);
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const updateUserById: UpdateUserById = async () => {
    try {
      const { data } = await apiPayload().patch<UpdateUserByIdResponse>(
        `${url}/`,
      );
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const deleteUserById: DeleteUserById = async () => {
    try {
      const { data } = await apiPayload().delete<DeleteUserByIdResponse>(
        `${url}/`,
      );
      return {
        success: true,
        data: data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  return {
    getUsers,
    getUserMe,
    updateUserMe,
    updatePasswordMe,
    getUserById,
    updateUserById,
    deleteUserById,
    deleteUserMe,
    registerUser,
    createUser,
  };
};
