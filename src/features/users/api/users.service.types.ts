import { User } from "@/types";
import { Response } from "@/types/api";

export type GetUsers = (params: {
  skip?: number;
  limit?: number;
}) => Promise<Response<GetUsersResponse>>;

export type GetUsersResponse = {
  data: User[];
  count: number;
};

export type CreateUser = (body: {
  email: string;
  full_name: string;
  is_active: boolean;
  is_superuser: boolean;
  password: string;
}) => Promise<Response<CreateUserResponse>>;

export type CreateUserResponse = User;

export type GetUserMe = () => Promise<Response<GetUserMeResponse>>;

export type GetUserMeResponse = User;

export type DeleteUserMe = () => Promise<Response<DeleteUserMeResponse>>;

export type DeleteUserMeResponse = {
  message: string;
};

export type UpdateUserMe = (body: {
  full_name: string;
  email: string;
}) => Promise<Response<UpdateUserMeResponse>>;

export type UpdateUserMeResponse = User;

export type UpdatePasswordMe = (body: {
  current_password: string;
  new_password: string;
}) => Promise<Response<UpdatePasswordMeResponse>>;

export type UpdatePasswordMeResponse = User;

export type RegisterUser = (body: {
  email: string;
  full_name: string;
  password: string;
}) => Promise<Response<RegisterUserResponse>>;

export type RegisterUserResponse = User;

export type GetUserById = (params: {
  user_id: string;
}) => Promise<Response<GetUserByIdResponse>>;

export type GetUserByIdResponse = User;

export type UpdateUserById = (
  params: {
    user_id: string;
  },
  body: {
    email?: string;
    full_name?: string;
    is_active?: boolean;
    is_superuser?: boolean;
    password?: string;
  },
) => Promise<Response<UpdateUserByIdResponse>>;

export type UpdateUserByIdResponse = User;

export type DeleteUserById = (params: {
  user_id: string;
}) => Promise<Response<DeleteUserByIdResponse>>;

export type DeleteUserByIdResponse = {
  message: string;
};
