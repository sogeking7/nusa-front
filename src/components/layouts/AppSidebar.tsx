"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  ArchiveIcon,
  LayoutGridIcon,
  PieChartIcon,
  UsersIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const links = [
  { href: "/home/map", icon: LayoutGridIcon },
  { href: "/home/staff", icon: UsersIcon },
  { href: "/home/budget", icon: PieChartIcon },
  { href: "/home/warehouse", icon: ArchiveIcon },
];

const adminLinks = [
  { href: "/home/admin", icon: SettingsIcon, adminOnly: true },
];

export const AppSidebar = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  const allLinks = [
    ...links,
    ...(user?.user_type === "admin" ? adminLinks : []),
  ];

  return (
    <nav className="fixed top-1/2 flex h-full -translate-y-1/2 flex-col justify-center gap-6 p-4 pt-16">
      {allLinks.map(({ href, icon: Icon }) => (
        <Link key={href} href={href}>
          <Button
            size="icon"
            className={`${pathname === href ? "size-12 bg-accent text-accent-foreground" : "size-12"}`}
            variant="outline"
          >
            <Icon />
          </Button>
        </Link>
      ))}
    </nav>
  );
};
