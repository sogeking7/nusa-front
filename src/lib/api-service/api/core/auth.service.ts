import { api } from "@/lib/api-service/axios";
import { UserModel } from "@/lib/api-service";

const url = "/auth";

type LoginResponse = {
  access_token: string;
  refresh_token: string;
};

export const authService = {
  login: async (email: string, password: string) => {
    const localVarPath = `/login/`;
    return await api.post<LoginResponse>(`${url}${localVarPath}`, {
      email,
      password,
    });
  },

  register: async (email: string, username: string, password: string) => {
    const localVarPath = `/register/`;
    return await api.post<LoginResponse>(`${url}${localVarPath}`, {
      email,
      username,
      password,
    });
  },

  refresh: async (refreshToken: string) => {
    const localVarPath = `/refresh/`;
    return await api.post<LoginResponse>(`${url}${localVarPath}`, {
      refresh_token: refreshToken,
    });
  },

  getMe: async () => {
    const localVarPath = `/me`;
    return await api.get<UserModel>(`/users${localVarPath}`);
  },
};
