import { LoginForm } from "@/features/auth/components/LoginForm";
import { Suspense } from "react";

export default function CreateAccount() {
  return (
    <Suspense fallback={"Loading..."}>
      <LoginForm />
    </Suspense>
  );
}
