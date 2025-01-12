import { apiPayload } from "@/lib/axios";
import { isAxiosError } from "axios";
import {
  Login,
  LoginResponse,
  RecoverPassword,
  RecoverPasswordHTML,
  RecoverPasswordHTMLResponse,
  RecoverPasswordResponse,
  ResetPassword,
  ResetPasswordResponse,
  TestToken,
  TestTokenResponse,
} from "./auth.service.types";

export const AuthService = () => {
  const url = "/login";

  const testToken: TestToken = async () => {
    try {
      const { data } = await apiPayload().post<TestTokenResponse>(
        `${url}/test-token`,
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

  const login: Login = async (body) => {
    try {
      const formData = new FormData();

      Object.entries(body).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const { data } = await apiPayload().post<LoginResponse>(
        `${url}/access-token`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
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

  const recoverPassword: RecoverPassword = async (params) => {
    try {
      const { data } = await apiPayload().post<RecoverPasswordResponse>(
        `/password-recovery`,
        {
          params,
        },
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

  const resetPassword: ResetPassword = async () => {
    try {
      const { data } =
        await apiPayload().post<ResetPasswordResponse>(`/reset-password`);
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

  const recoverPasswordHTMl: RecoverPasswordHTML = async (params) => {
    try {
      const { data } = await apiPayload().post<RecoverPasswordHTMLResponse>(
        `/password-recovery-html-content`,
        {
          params,
        },
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
    testToken,
    recoverPassword,
    resetPassword,
    recoverPasswordHTMl,
  };
};
