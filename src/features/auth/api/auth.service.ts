import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import {
  CreateUser,
  CreateUserResponse,
  GetMe,
  GetMeResponse,
  Login,
  LoginResponse,
  Logout,
  LogoutResponse,
  Refresh,
  RefreshResponse,
} from "@/features/auth/api/auth.service.types";

export const AuthService = () => {
  const url = "/user";

  const getMe: GetMe = async () => {
    try {
      const { data } = await apiPayload().get<GetMeResponse>(`${url}/me`);
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

  const login: Login = async (body) => {
    try {
      const { data } = await apiPayload().post<LoginResponse>(
        `${url}/token`,
        body,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return {
        success: true,
        data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const create: CreateUser = async (body) => {
    try {
      const { data } = await apiPayload().post<CreateUserResponse>(
        `${url}/register`,
        body
      );
      return {
        success: true,
        data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const logout: Logout = async () => {
    try {
      const { data } = await apiPayload().post<LogoutResponse>(`${url}/logout`);
      return {
        success: true,
        data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  const refreshToken: Refresh = async () => {
    try {
      const { data } = await apiPayload().post<RefreshResponse>(
        `${url}/refresh-token`
      );
      return {
        success: true,
        data,
      };
    } catch (e: unknown) {
      return {
        success: false,
        data: isAxiosError(e) ? e.message : (e as Error).message,
      };
    }
  };

  return {
    login,
    create,
    logout,
    getMe,
    refreshToken,
  };
};
