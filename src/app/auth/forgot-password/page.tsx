"use client";

import { ForgotPasswordForm } from "@/features/auth/ForgotPassword/ForgotPasswordForm";
import React from "react";

export default function Page() {
  return (
    <div className="w-full max-w-lg p-2">
      <div>
        <h1 className="text-sm text-[#D9D9D966]">Восстановление пароля</h1>
        <div className="mt-3 h-[1px] w-10 bg-[#E31E24]" />
      </div>
      <div className="mt-6">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
