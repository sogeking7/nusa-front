"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  CodepenIcon,
  LayoutGridIcon,
  PieChartIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/home/map", icon: LayoutGridIcon },
  { href: "/home/people", icon: UsersIcon },
  { href: "/home/codepen", icon: CodepenIcon },
  { href: "/home/budget", icon: PieChartIcon },
];

export const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-1/2 flex h-full pt-16 -translate-y-1/2 flex-col justify-center gap-6 p-4">
      {links.map(({ href, icon: Icon }) => (
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
