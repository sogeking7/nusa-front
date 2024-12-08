import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";
import { Suspense } from "react";

export default async function CreateAccount() {
  return (
    <Suspense>
      <ForgotPasswordForm />
    </Suspense>
  );
}
