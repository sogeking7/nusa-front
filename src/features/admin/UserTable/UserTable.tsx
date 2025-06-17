"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Edit, Trash2, Key } from "lucide-react";
import { AdminUserModel, UserModel } from "@/lib/api-service";

interface UserTableProps {
  users: AdminUserModel[];
  currentUser: UserModel;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onEditUser: (user: AdminUserModel) => void;
  onChangePassword: (user: AdminUserModel) => void;
  onDeleteUser: (userId: string) => void;
}

export function UserTable({
  users,
  currentUser,
  currentPage,
  totalPages,
  onPageChange,
  onEditUser,
  onChangePassword,
  onDeleteUser,
}: UserTableProps) {
  return (
    <>
      {/* Users Table */}
      <div className="max-h-[60vh] overflow-auto rounded-lg border border-white/20 text-white">
        <Table className="border-separate border-spacing-0 border-0">
          <TableHeader className="sticky top-0 z-10 border-white/20 bg-[#1c1c1d]">
            <TableRow>
              <TableHead className="border-b border-r border-white/20 text-white">
                Email
              </TableHead>
              <TableHead className="border-b border-r border-white/20 text-white">
                Имя пользователя
              </TableHead>
              <TableHead className="border-b border-r border-white/20 text-white">
                Тип
              </TableHead>
              <TableHead className="border-b border-r border-white/20 text-white">
                Статус
              </TableHead>
              <TableHead className="border-b border-white/20 text-white">
                Действия
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => {
              const isCurrentUser = user.id === currentUser.id;

              return (
                <TableRow
                  key={user.id}
                  className="bg-inherit transition-colors hover:bg-white/5"
                >
                  <TableCell className="border-b border-r border-white/20 text-white">
                    {user.email}
                    {isCurrentUser && (
                      <span className="ml-2 text-xs text-primary-green">
                        (Вы)
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="border-b border-r border-white/20 text-white">
                    {user.username}
                  </TableCell>
                  <TableCell className="border-b border-r border-white/20">
                    <Badge
                      variant="outline"
                      className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                    >
                      {user.user_type}
                    </Badge>
                  </TableCell>
                  <TableCell className="border-b border-r border-white/20">
                    <Badge
                      variant={user.is_active ? "default" : "secondary"}
                      className={
                        user.is_active
                          ? "bg-green-600/80 text-white hover:bg-green-600"
                          : "bg-gray-600/80 text-white hover:bg-gray-600"
                      }
                    >
                      {user.is_active ? "Активен" : "Неактивен"}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={`${index === users.length - 1 ? "" : "border-b"} border-white/20`}
                  >
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEditUser(user)}
                        className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onChangePassword(user)}
                        className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                      >
                        <Key className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onDeleteUser(user.id)}
                        disabled={isCurrentUser}
                        className={
                          isCurrentUser
                            ? "cursor-not-allowed border-gray-500/50 bg-gray-500/10 text-gray-500 opacity-50"
                            : "border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300"
                        }
                        title={
                          isCurrentUser
                            ? "Вы не можете удалить себя"
                            : "Удалить пользователя"
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination className="mt-6">
        <PaginationContent className="text-white">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) {
                  onPageChange(currentPage - 1);
                }
              }}
              className={`border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white ${currentPage <= 1 ? "pointer-events-none opacity-50" : ""} `}
            />
          </PaginationItem>

          {(() => {
            const pageNumbers: (number | string)[] = [];

            if (totalPages <= 7) {
              // Show all pages if there aren't too many
              for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
              }
            } else {
              pageNumbers.push(1);

              if (currentPage > 4) {
                pageNumbers.push("...");
              }

              const startPage = Math.max(2, currentPage - 1);
              const endPage = Math.min(totalPages - 1, currentPage + 1);

              for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
              }

              if (currentPage < totalPages - 3) {
                pageNumbers.push("...");
              }

              pageNumbers.push(totalPages);
            }

            return pageNumbers.map((page, index) =>
              page === "..." ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis className="text-white" />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(Number(page));
                    }}
                    className={
                      page === currentPage
                        ? "border-white/50 bg-white/20 text-white"
                        : "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    }
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ),
            );
          })()}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                  onPageChange(currentPage + 1);
                }
              }}
              className={`border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white ${currentPage >= totalPages ? "pointer-events-none opacity-50" : ""} `}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
