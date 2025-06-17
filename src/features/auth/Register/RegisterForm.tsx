"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { z } from "zod";
import { authService } from "@/lib/api-service";

const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
});
type RegisterForm = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const router = useRouter();

  const { updateUser } = useAuth();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    const { email, username, password } = data;

    try {
      await authService.register(email, username, password).then(({ data }) => {
        const accessToken = data.access_token;
        const refreshToken = data.refresh_token;
        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("refresh-token", refreshToken);
      });

      await authService.getMe().then(({ data }) => {
        updateUser(data);
        router.push("/home/me");
      });
    } catch (error: any) {
      // Handle API errors and show in Russian
      let errorMessage = "Произошла ошибка при регистрации";

      if (error.response?.data?.detail) {
        const detail = error.response.data.detail;
        const translations: { [key: string]: string } = {
          "Email already registered": "Email уже зарегистрирован",
          "Username already taken": "Имя пользователя уже занято",
          "Invalid email format": "Неверный формат email",
          "Password too weak": "Пароль слишком слабый",
          "Username too short": "Имя пользователя слишком короткое",
        };
        errorMessage = translations[detail] || detail;
      }

      alert(errorMessage);
      console.error("Register error:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-end gap-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-10">
              <FormLabel className="hidden text-sm text-white lg:block lg:min-w-16">
                Email
              </FormLabel>
              <div className="flex w-full flex-col space-y-2">
                <FormControl>
                  <Input placeholder="Почта" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-10">
              <FormLabel className="hidden text-sm text-white lg:block lg:min-w-16">
                Логин
              </FormLabel>
              <div className="flex w-full flex-col space-y-2">
                <FormControl>
                  <Input placeholder="Имя пользователя" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-10">
              <FormLabel className="hidden text-sm text-white lg:block lg:min-w-16">
                Пароль
              </FormLabel>
              <div className="flex w-full flex-col space-y-2">
                <FormControl>
                  <PasswordInput placeholder="Пароль" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <div className="flex w-full items-center gap-10 space-y-6">
          <FormLabel className="hidden text-sm text-white lg:block lg:min-w-16"></FormLabel>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="border border-white/40 bg-transparent text-white/60 shadow-none hover:bg-white hover:text-accent-foreground md:w-1/2"
            >
              {form.formState.isSubmitting ? "Загрузка..." : "Регистрация"}
            </Button>
            <Button
              onClick={() => router.push("/auth/login")}
              type="button"
              variant={"link"}
              className="text-white/40 md:w-1/2"
            >
              Уже есть аккаунт?
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
