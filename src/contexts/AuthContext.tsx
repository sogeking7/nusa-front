"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { authService, UserModel } from "@/lib/api-service";

export interface AuthContext {
  user: UserModel | null;
  setUser: Dispatch<SetStateAction<UserModel | null>>;
}

type UseAuth<T = UserModel | null> = () => {
  user: T;
  updateUser: (user: UserModel) => void;
  login: (user: UserModel) => void;
  logout: () => void;
};

export const ContextAuth = createContext<AuthContext | undefined>(undefined);

export const useAuth: UseAuth = () => {
  const context = useContext(ContextAuth);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { user, setUser } = context;

  function logout() {
    setUser(null);
  }

  function login(user: UserModel) {
    setUser(user);
  }

  const updateUser = (user: UserModel) => setUser(user);

  return { user, login, logout, updateUser };
};

export const ProviderAuth = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    fetchMe();
  }, []);

  const fetchMe = async () => {
    try {
      const { data } = await authService.getMe();
      setUser(data);
    } catch (e) {
      setUser(null);
    } finally {
    }
  };

  return (
    <ContextAuth.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
