"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { AdminUserModel } from "@/lib/api-service";

interface ChangePasswordFormProps {
  user: AdminUserModel;
  onChangePassword: (userId: string, password: string) => void;
}

export function ChangePasswordForm({
  user,
  onChangePassword,
}: ChangePasswordFormProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    if (password.length < 6) {
      alert("Пароль должен содержать не менее 6 символов");
      return;
    }
    onChangePassword(user.id, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="password" className="text-white">
          Новый пароль
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-white" />
            ) : (
              <Eye className="h-4 w-4 text-white" />
            )}
          </Button>
        </div>
      </div>
      <div>
        <Label htmlFor="confirmPassword" className="text-white">
          Подтвердите пароль
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4 text-white" />
            ) : (
              <Eye className="h-4 w-4 text-white" />
            )}
          </Button>
        </div>
      </div>
      <Button type="submit" className="w-full">
        Изменить пароль
      </Button>
    </form>
  );
}
