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
import { cn } from "@/lib/utils";

const createAccountSchema = z.object({
  email: z.string().email("Неверный адрес электронной почты"),
  password: z
    .string()
    .min(8, { message: "Пароль должен содержать минимум 8 символов" })
    .regex(/[A-Z]/, {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    }),
});

type FormData = z.infer<typeof createAccountSchema>;

export const LoginForm = () => {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    router.push("/home");
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
                type="submit"
                className={cn(
                  "md:w-1/2",
                  "border border-white/40 bg-transparent text-white/60 shadow-none",
                  "hover:bg-white hover:text-accent-foreground",
                )}
              >
                Вход
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
