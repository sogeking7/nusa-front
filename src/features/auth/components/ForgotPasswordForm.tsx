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
import { cn } from "@/lib/utils";

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
    <div className="w-full max-w-lg px-4">
      <div>
        <h1 className="text-sm text-[#D9D9D966]">Восстановление пароля</h1>
        <div className="mt-3 h-[1px] w-10 bg-[#E31E24]" />
      </div>
      <div className="mt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-end gap-3"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex w-full items-center gap-16">
                  <FormLabel className="hidden text-base text-white md:block md:min-w-16">
                    Логин
                  </FormLabel>
                  <div className="flex w-full flex-col space-y-2">
                    <FormControl className="w-full">
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
                <FormItem className="flex w-full items-center gap-16">
                  <FormLabel className="hidden text-base text-white md:block md:min-w-16">
                    Пароль
                  </FormLabel>
                  <div className="flex w-full flex-col space-y-2">
                    <FormControl className="w-full">
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
                <FormItem className="flex w-full items-center gap-16">
                  <FormLabel className="invisible hidden text-base text-white md:block md:min-w-16">
                    Пароль
                  </FormLabel>
                  <div className="flex w-full flex-col space-y-2">
                    <FormControl className="w-full">
                      <PasswordInput
                        placeholder="Повторите пароль"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="mt-6 w-full md:max-w-[350px]">
              <Button
                type="submit"
                className={cn(
                  "w-full md:w-[70%]",
                  "border border-white/40 bg-transparent text-white/60 shadow-none",
                  "hover:bg-white hover:text-accent-foreground",
                )}
              >
                Обновить пароль
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
