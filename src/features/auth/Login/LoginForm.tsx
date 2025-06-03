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

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type LoginForm = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();

  const { updateUser } = useAuth();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    const { email, password } = data;

    try {
      await authService.login(email, password).then(({ data }) => {
        const accessToken = data["access_token"];
        localStorage.setItem("access-token", accessToken);
      });

      await authService.getMe().then(({ data }) => {
        updateUser(data);
        router.push("/home/me");
      });
    } catch (e) {}
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

        <div className="flex w-full items-center gap-10 space-y-6">
          <FormLabel className="hidden text-sm text-white lg:block lg:min-w-16"></FormLabel>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="border border-white/40 bg-transparent text-white/60 shadow-none hover:bg-white hover:text-accent-foreground md:w-1/2"
            >
              {form.formState.isSubmitting ? "Загрузка..." : "Вход"}
            </Button>
            <Button
              onClick={() => router.push("/auth/forgot-password")}
              type="button"
              variant={"link"}
              className="text-white/40 md:w-1/2"
            >
              Забыли пароль?
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
