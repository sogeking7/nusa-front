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
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

type UseAuth<T = UserModel | null> = () => {
  user: T;
  isLoading: boolean;
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

  const { user, setUser, isLoading } = context;

  function logout() {
    setUser(null);
  }

  function login(user: UserModel) {
    setUser(user);
  }

  const updateUser = (user: UserModel) => setUser(user);

  return { user, isLoading, login, logout, updateUser };
};

export const ProviderAuth = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      setIsLoading(false);
    }
  };

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-gray-100"></div>
      </div>
    );
  }

  return (
    <ContextAuth.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
