"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { cn } from "@/lib/utils";
import { AuthService } from "../api/auth.service";
import { UsersService } from "@/features/users/api/users.service";
import { useAuth } from "../providers/client";

const loginSchema = z.object({
  email: z.string().email("Неверный адрес электронной почты"),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать минимум 6 символов" }),
  // .regex(/[A-Z]/, {
  //   message: "Пароль должен содержать хотя бы одну заглавную букву",
  // }),
});

type FormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const { user, updateUser } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    const { data, success } = await AuthService().login({
      username: values.email,
      password: values.password,
    });
    if (success) {
      localStorage.setItem("access-token", data.access_token);
      const me = await UsersService().getUserMe();
      if (me.success) {
        console.log(me.data);
        setError("");
        updateUser(me.data);
        router.push("/home/me");
      } else {
        setError(me.data?.detail || "Произошла какая-то ошибка");
      }
    } else {
      setError(data?.detail || "Неправильное имя пользователя или пароль");
    }
  };

  return (
    <div className="w-full max-w-lg p-2">
      <div>
        <h1 className="text-sm text-[#D9D9D966]">Вход в систему</h1>
        <div className="mt-3 h-[1px] w-10 bg-[#E31E24]" />
      </div>
      <div className="mt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-end gap-3"
          >
            <FormMessage className="mb-2 w-full text-left">{error}</FormMessage>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex w-full items-center gap-10">
                  <FormLabel className="hidden text-sm text-white lg:block lg:min-w-16">
                    Логин
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

            <Button
              onClick={() => router.push("/auth/forgot-password")}
              type="button"
              size={"sm"}
              variant={"link"}
              className={cn("md:hidden", "md:w-1/2", "text-white/40")}
            >
              Забыли пароль?
            </Button>

            <div className="mt-6 flex w-full flex-col gap-4 md:max-w-[350px] md:flex-row">
              <Button
                disabled={form.formState.isSubmitting}
                type="submit"
                className={cn(
                  "md:w-1/2",
                  "border border-white/40 bg-transparent text-white/60 shadow-none",
                  "hover:bg-white hover:text-accent-foreground",
                )}
              >
                {form.formState.isSubmitting ? "Загрузка..." : "Вход"}
              </Button>
              <Button
                onClick={() => router.push("/auth/forgot-password")}
                type="button"
                variant={"link"}
                className={cn("max-md:hidden", "md:w-1/2", "text-white/40")}
              >
                Забыли пароль?
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
