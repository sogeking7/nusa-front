import { User } from "@/types";
import { Response } from "@/types/api";

export type Login = (body: {
  username: string;
  password: string;
}) => Promise<Response<LoginResponse>>;

export type LoginResponse = {
  access_token: string;
  token_type: string;
};

export type TestToken = () => Promise<Response<TestTokenResponse>>;

export type TestTokenResponse = User;

export type RecoverPassword = (params: {
  email: string;
}) => Promise<Response<RecoverPasswordResponse>>;

export type RecoverPasswordResponse = {
  message: string;
};

export type ResetPassword = (body: {
  token: string;
  new_password: string;
}) => Promise<Response<ResetPasswordResponse>>;

export type ResetPasswordResponse = {
  message: string;
};

export type RecoverPasswordHTML = (params: {
  email: string;
}) => Promise<Response<RecoverPasswordHTMLResponse>>;

export type RecoverPasswordHTMLResponse = {
  message: string;
};
