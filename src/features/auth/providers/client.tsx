// "use client";

// import {
//   createContext,
//   Dispatch,
//   SetStateAction,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { User } from "@/types";
// import { AuthService } from "../api/auth.service";
// export interface AuthContext {
//   error: string;
//   user: User | null;
//   setUser: Dispatch<SetStateAction<User | null>>;
// }

// type UseAuth<T = User | null> = () => {
//   error: string;
//   user: T;
//   login: (user: User) => void;
//   logout: () => void;
//   updateUser: (user: User) => void;
// };
// export const ContextAuth = createContext<AuthContext | undefined>(undefined);

// export const useAuth: UseAuth = () => {
//   const context = useContext(ContextAuth);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   const { user, setUser, error } = context;
//   function logout() {
//     setUser(null);
//   }
//   function login(user: User) {
//     setUser(user);
//   }
//   const updateUser = (user: User) => setUser(user);
//   return { error, user, logout, login, updateUser };
// };

// export const ProviderAuth: React.FC<{
//   children: React.ReactNode;
// }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const fetchMe = async () => {
//       const { success, data } = await AuthService().getMe();
//       if (success) {
//         setError("");
//         setUser(data);
//       } else {
//         setError(data);
//         setUser(null);
//       }
//     };
//     fetchMe();
//   }, []);

//   return (
//     <ContextAuth.Provider
//       value={{
//         error,
//         user,
//         setUser,
//       }}
//     >
//       {children}
//     </ContextAuth.Provider>
//   );
// };
