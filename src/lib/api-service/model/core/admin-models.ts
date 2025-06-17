export interface AdminUserModel {
  email: string;
  username: string;
  id: string;
  is_active: boolean;
  user_type: string;
}

export interface AdminUsersResponse {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
  users: AdminUserModel[];
}

export interface UserRoleModel {
  id: string;
  user_type: string;
}

export interface UpdateUserRequest {
  email?: string;
  username?: string;
  is_active?: boolean;
}
