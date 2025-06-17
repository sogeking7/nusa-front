"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { adminService, AdminUserModel, UserRoleModel } from "@/lib/api-service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Users, Search } from "lucide-react";
import { UserTable } from "../UserTable/UserTable";
import { EditUserForm } from "../EditUserForm/EditUserForm";
import { ChangePasswordForm } from "../ChangePasswordForm/ChangePasswordForm";

export default function AdminPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<AdminUserModel[]>([]);
  const [roles, setRoles] = useState<UserRoleModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<AdminUserModel | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);

  const loadUsers = async (page: number = 1, limit: number = 10) => {
    try {
      setLoading(true);
      const response = await adminService.getUsers(page, limit);
      setUsers(response.data.users);
      setCurrentPage(response.data.page);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      alert("Ошибка загрузки пользователей");
      console.error("Error loading users:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadRoles = async () => {
    try {
      const response = await adminService.getUserRoles();
      setRoles(response.data);
    } catch (error) {
      alert("Ошибка загрузки ролей");
      console.error("Error loading roles:", error);
    }
  };

  useEffect(() => {
    if (user && user.user_type === "admin") {
      loadUsers();
      loadRoles();
    }
  }, [user]);

  // Check if user is admin
  if (!user || user?.user_type !== "admin") {
    return (
      <div className="container mx-auto py-8">
        <Card className="mx-auto max-w-xl">
          <CardContent className="p-6 text-center">
            <h1 className="text-xl font-semibold text-red-500">
              Доступ запрещен
            </h1>
            <p className="mt-2 text-muted-foreground">
              У вас нет прав доступа к панели администратора
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Handle user actions
  const handleDeleteUser = async (userId: string) => {
    if (window.confirm("Вы уверены, что хотите удалить этого пользователя?")) {
      try {
        await adminService.deleteUser(userId);
        alert("Пользователь удален");
        loadUsers(currentPage);
      } catch (error) {
        alert("Ошибка удаления пользователя");
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleUpdateUser = async (userId: string, userData: any) => {
    if (
      !window.confirm(
        "Вы уверены, что хотите обновить данные этого пользователя?",
      )
    ) {
      return;
    }

    try {
      await adminService.updateUser(userId, userData);
      alert("Пользователь обновлен");
      setEditDialogOpen(false);
      loadUsers(currentPage);
    } catch (error) {
      alert("Ошибка обновления пользователя");
      console.error("Error updating user:", error);
    }
  };

  const handleUpdateRole = async (userId: string, roleId: string) => {
    if (
      !window.confirm(
        "Вы уверены, что хотите изменить роль этого пользователя?",
      )
    ) {
      return;
    }

    try {
      await adminService.updateUserRole(userId, roleId);
      alert("Роль пользователя изменена");
      setEditDialogOpen(false);
      loadUsers(currentPage);
    } catch (error) {
      alert("Ошибка изменения роли пользователя");
      console.error("Error updating user role:", error);
    }
  };

  const handleChangePassword = async (userId: string, newPassword: string) => {
    if (
      !window.confirm(
        "Вы уверены, что хотите изменить пароль этого пользователя?",
      )
    ) {
      return;
    }

    try {
      await adminService.changeUserPassword(userId, newPassword);
      alert("Пароль изменен");
      setPasswordDialogOpen(false);
    } catch (error) {
      alert("Ошибка изменения пароля");
      console.error("Error changing password:", error);
    }
  };

  const handleEditUser = (user: AdminUserModel) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleChangePasswordDialog = (user: AdminUserModel) => {
    setSelectedUser(user);
    setPasswordDialogOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    loadUsers(page);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <div className="text-lg text-white">Загрузка...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-white">
            <Users className="h-6 w-6" />
            Панель администратора - Управление пользователями
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4 p-0">
          <div className="mb-6 w-full">
            <Input
              placeholder="Поиск пользователей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=""
              rightIcon={<Search className="h-4 w-4 text-white" />}
            />
          </div>

          <UserTable
            users={filteredUsers}
            currentUser={user}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onEditUser={handleEditUser}
            onChangePassword={handleChangePasswordDialog}
            onDeleteUser={handleDeleteUser}
          />

          <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
            <DialogContent className="border-white/20 bg-[#1c1c1d]">
              <DialogHeader>
                <DialogTitle className="text-white">
                  Редактировать пользователя
                </DialogTitle>
              </DialogHeader>
              {selectedUser && (
                <EditUserForm
                  user={selectedUser}
                  currentUser={user}
                  roles={roles}
                  onSave={handleUpdateUser}
                  onUpdateRole={handleUpdateRole}
                />
              )}
            </DialogContent>
          </Dialog>

          <Dialog
            open={passwordDialogOpen}
            onOpenChange={setPasswordDialogOpen}
          >
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-white">
                  Изменить пароль
                </DialogTitle>
              </DialogHeader>
              {selectedUser && (
                <ChangePasswordForm
                  user={selectedUser}
                  onChangePassword={handleChangePassword}
                />
              )}
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
