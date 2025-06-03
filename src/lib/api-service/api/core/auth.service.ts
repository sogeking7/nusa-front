import { api } from "@/lib/api-service/axios";
import { UserModel } from "@/lib/api-service";

const url = "/auth";

export const authService = {
  login: async (email: string, password: string) => {
    const localVarPath = `/login`;
    return await api.post<unknown>(`${url}${localVarPath}`, {
      email,
      password,
    });
  },

  getMe: async () => {
    const localVarPath = `/me`;
    return await api.get<UserModel>(`${url}${localVarPath}`);
  },
};
