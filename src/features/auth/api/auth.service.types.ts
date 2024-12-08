import { User } from "@/types";
import { Response } from "@/types/api";

export type CreateUser = (body: {
  fullname: string;
  username: string;
  about: string;
  city: string;
  email: string;
  password: string;
}) => Promise<Response<CreateUserResponse>>;

export type CreateUserResponse = {
  uuid: string;
  email: string;
  is_active: boolean;
};

export type Login = (body: FormData) => Promise<Response<LoginResponse>>;

export type LoginResponse = {
  access_token: string;
  token_type: string;
  refresh_token: string;
};

export type Logout = () => Promise<Response<LogoutResponse>>;

export type LogoutResponse = {
  message: string;
};

export type GetMe = (token?: string) => Promise<Response<GetMeResponse>>;

export type GetMeResponse = User;

export type Refresh = () => Promise<Response<RefreshResponse>>;

export type RefreshResponse = {
  message: string;
  user: User;
  refreshedToken: string;
  exp: number;
};
