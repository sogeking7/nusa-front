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
    <div className="max-w-lg w-full px-4">
      <div>
        <h1 className="text-sm text-[#D9D9D966]">Вход в систему</h1>
        <div className="w-10 h-[1px] bg-[#E31E24] mt-3" />
      </div>
      <div className="mt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 items-end"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full flex gap-16 items-center">
                  <FormLabel className="md:min-w-16 text-base text-white hidden md:block">
                    Логин
                  </FormLabel>
                  <div className="flex flex-col space-y-2 w-full">
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
                <FormItem className="w-full flex gap-16 items-center">
                  <FormLabel className="md:min-w-16 text-base text-white hidden md:block">
                    Пароль
                  </FormLabel>
                  <div className="flex flex-col space-y-2 w-full">
                    <FormControl className="w-full">
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

            <div className="md:max-w-[350px] mt-6 flex md:flex-row flex-col w-full gap-4">
              <Button
                type="submit"
                className={cn(
                  "md:w-1/2",
                  "text-white/60 bg-transparent shadow-none border-white/40 border",
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
