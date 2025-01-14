"use client";

import { useAuth } from "@/features/auth/providers/client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, User, Shield, Edit, Key } from "lucide-react";

export type User = {
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  full_name: null | string;
  id: string;
};

export default function MePage() {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-4xl">
                {user.full_name
                  ? user.full_name[0].toUpperCase()
                  : user.email[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl font-bold text-white">
            {user.full_name || "User Profile"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-muted-foreground">
                Email
              </label>
              <div className="flex items-center space-x-2 text-white">
                <Mail className="size-4" />
                <span className="text-sm text-white">{user.email}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <div className="flex items-center space-x-2 text-white">
                <User className="size-4" />
                <span className="text-sm text-white">
                  {user.full_name || "Not provided"}
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-muted-foreground">
                Role
              </label>
              <div className="flex items-center space-x-2 text-white">
                <Shield className="size-4" />
                <span className="text-sm text-white">
                  {user.is_superuser ? "Admin" : "Regular User"}
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-muted-foreground">
                Status
              </label>
              <div>
                <Badge
                  className="text-white"
                  variant={user.is_active ? "success" : "destructive"}
                >
                  {user.is_active ? "Active" : "Inactive"}
                </Badge>
              </div>
            </div>
          </div>
          <div className="mt-6 space-x-2">
            <Button variant="outline" className="space-x-2">
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </Button>
            <Button variant="outline" className="space-x-2">
              <Key className="h-4 w-4" />
              <span>Change Password</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
