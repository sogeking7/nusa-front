"use client";

import { useAuth } from "@/contexts/AuthContext";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, User, Edit, Key } from "lucide-react";
import { LogoutBtn } from "@/features/auth/Logout/LogoutBtn";

export default function MePage() {
  const { user } = useAuth();

  // if (!user) {
  //   return <div>You must be logged in</div>;
  // }

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-xl">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/berkut.jpg" alt="@shadcn" />
            </Avatar>
          </div>
          <CardTitle className="text-3xl font-bold text-white">
            {"User Profile"}
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
                <span className="text-sm text-white">{"test"}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <div className="flex items-center space-x-2 text-white">
                <User className="size-4" />
                <span className="text-sm text-white">{"test"}</span>
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
          <div className="mt-6 space-y-2">
            <LogoutBtn />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
