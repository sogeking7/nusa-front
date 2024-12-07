import { CreateAccountForm } from "@/features/auth/components/CreateAccountForm";
import { Suspense } from "react";

export default async function CreateAccount() {
  return (
    <Suspense>
      <CreateAccountForm />
    </Suspense>
  );
}
