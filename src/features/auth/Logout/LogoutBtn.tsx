"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";

export const LogoutBtn = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Button
      onClick={() => {
        localStorage.removeItem("access-token");
        logout();
        router.push("/");
      }}
      variant="outline"
      className={cn(
        "stroke-destructive text-destructive hover:bg-accent",
        "w-full",
      )}
    >
      <span className="flex items-center gap-3">
        <LogOutIcon />
        Выйти
      </span>
    </Button>
  );
};
