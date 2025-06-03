"use client";

import React from "react";
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

const createAccountSchema = z
  .object({
    email: z.string().email("Неверный адрес электронной почты"),
    password: z
      .string()
      .min(8, { message: "Пароль должен содержать минимум 8 символов" })
      .regex(/[A-Z]/, {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      }),
    passwordConfirm: z
      .string()
      .min(8, { message: "Пароль должен содержать минимум 8 символов" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Пароли не совпадают",
  });

type FormData = z.infer<typeof createAccountSchema>;

export const ForgotPasswordForm = () => {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (values: FormData) => {};

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
                  <PasswordInput placeholder="Новый пароль" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-10">
              <FormLabel className="invisible hidden text-sm text-white lg:block lg:min-w-16">
                Пароль
              </FormLabel>
              <div className="flex w-full flex-col space-y-2">
                <FormControl>
                  <PasswordInput placeholder="Повторите пароль" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <div className="flex w-full items-center gap-10 space-y-6">
          <FormLabel className="invisible hidden text-sm text-white lg:block lg:min-w-16"></FormLabel>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Button
              type="submit"
              className="w-full border border-white/40 bg-transparent text-white/60 shadow-none hover:bg-white hover:text-accent-foreground md:w-1/2"
            >
              Обновить пароль
            </Button>
            <Button
              onClick={() => router.push("/auth/login")}
              type="button"
              variant={"link"}
              className="text-white/40 md:w-1/2"
            >
              Войти
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
