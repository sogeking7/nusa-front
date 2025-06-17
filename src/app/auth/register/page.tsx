"use client";

import { RegisterForm } from "@/features/auth/Register/RegisterForm";

export default function Page() {
  return (
    <div className="w-full max-w-lg space-y-6 p-2">
      <div>
        <h1 className="text-sm text-[#D9D9D966]">Регистрация в системе</h1>
        <div className="mt-3 h-[1px] w-10 bg-[#E31E24]" />
      </div>
      <RegisterForm />
    </div>
  );
}
