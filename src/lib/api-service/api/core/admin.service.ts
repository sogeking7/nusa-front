import { api } from "@/lib/api-service/axios";
import {
  AdminUsersResponse,
  AdminUserModel,
  UserRoleModel,
  UpdateUserRequest,
} from "@/lib/api-service/model/core/admin-models";

const url = "/admin";

export const adminService = {
  getUsers: async (page: number = 1, limit: number = 10) => {
    const localVarPath = `/users`;
    return await api.get<AdminUsersResponse>(`${url}${localVarPath}`, {
      params: { page, limit },
    });
  },

  getUserById: async (userId: string) => {
    const localVarPath = `/user/${userId}`;
    return await api.get<AdminUserModel>(`${url}${localVarPath}`);
  },

  getUserRoles: async () => {
    const localVarPath = `/roles/`;
    return await api.get<UserRoleModel[]>(`${url}${localVarPath}`);
  },

  updateUser: async (userId: string, userData: UpdateUserRequest) => {
    const localVarPath = `/update-user/${userId}`;
    return await api.put<AdminUserModel>(`${url}${localVarPath}`, userData);
  },

  updateUserRole: async (userId: string, userTypeId: string) => {
    const localVarPath = `/update-user-role/${userId}/${userTypeId}`;
    return await api.patch<AdminUserModel>(`${url}${localVarPath}`);
  },

  changeUserPassword: async (userId: string, password: string) => {
    const localVarPath = `/change-password/${userId}`;
    return await api.put(`${url}${localVarPath}`, null, {
      params: { password },
    });
  },

  deleteUser: async (userId: string) => {
    const localVarPath = `/delete-user/${userId}`;
    return await api.delete(`${url}${localVarPath}`);
  },
};
