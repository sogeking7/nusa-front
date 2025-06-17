export interface UserModel {
  email: string;
  username: string;
  id: string;
  is_active: boolean;
  user_type: "accountant" | "admin" | "head";
}
