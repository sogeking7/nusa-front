"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdminUserModel, UserRoleModel, UserModel } from "@/lib/api-service";

interface EditUserFormProps {
  user: AdminUserModel;
  currentUser: UserModel;
  roles: UserRoleModel[];
  onSave: (userId: string, data: any) => void;
  onUpdateRole: (userId: string, roleId: string) => void;
}

export function EditUserForm({
  user,
  currentUser,
  roles,
  onSave,
  onUpdateRole,
}: EditUserFormProps) {
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [isActive, setIsActive] = useState(user.is_active);
  const [selectedRole, setSelectedRole] = useState(user.user_type);

  const isEditingSelf = user.id === currentUser.id;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentRole = roles.find((role) => role.user_type === user.user_type);
    const newRole = roles.find((role) => role.user_type === selectedRole);

    if (
      !isEditingSelf &&
      currentRole &&
      newRole &&
      currentRole.id !== newRole.id
    ) {
      onUpdateRole(user.id, newRole.id);
    }

    const hasUserDataChanged =
      email !== user.email ||
      username !== user.username ||
      isActive !== user.is_active;

    if (hasUserDataChanged) {
      onSave(user.id, { email, username, is_active: isActive });
    }

    const hasRoleChanged =
      !isEditingSelf && currentRole && newRole && currentRole.id !== newRole.id;
    if (!hasUserDataChanged && !hasRoleChanged) {
      alert("Никаких изменений не было сделано");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-white/20 bg-white/10 text-white placeholder:text-white/50 hover:bg-white/15 focus:border-white/40 focus:bg-white/15"
        />
      </div>

      <div>
        <Label htmlFor="username" className="text-white">
          Имя пользователя
        </Label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border-white/20 bg-white/10 text-white placeholder:text-white/50 hover:bg-white/15 focus:border-white/40 focus:bg-white/15"
        />
      </div>

      <div>
        <Label htmlFor="role" className="text-white">
          Роль пользователя
        </Label>
        {isEditingSelf ? (
          <div className="space-y-2">
            <div className="rounded-md border border-gray-500/30 bg-gray-600/20 px-3 py-2 text-gray-400">
              {user.user_type === "admin"
                ? "Администратор"
                : user.user_type === "accountant"
                  ? "Бухгалтер"
                  : user.user_type === "head"
                    ? "Руководитель"
                    : user.user_type}
            </div>
            <p className="text-xs text-gray-400">
              Вы не можете изменить свою собственную роль
            </p>
          </div>
        ) : (
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger className="border-white/20 bg-white/10 text-white hover:bg-white/15 focus:border-white/40 focus:bg-white/15">
              <SelectValue placeholder="Выберите роль" />
            </SelectTrigger>
            <SelectContent className="border-white/20 bg-[#1c1c1d]">
              {roles.map((role) => (
                <SelectItem
                  key={role.id}
                  value={role.user_type}
                  className="text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white data-[highlighted]:bg-white/20 data-[highlighted]:text-white"
                >
                  {role.user_type === "admin"
                    ? "Администратор"
                    : role.user_type === "accountant"
                      ? "Бухгалтер"
                      : role.user_type === "head"
                        ? "Руководитель"
                        : role.user_type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="is_active"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          className="rounded accent-primary"
        />
        <Label htmlFor="is_active" className="text-white">
          Активен
        </Label>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/80">
        Сохранить изменения
      </Button>
    </form>
  );
}
