"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  LayoutGridIcon,
  PieChartIcon,
  UsersIcon,
  ArchiveIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AppMobilebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/home/map", icon: LayoutGridIcon },
    { href: "/home/staff", icon: UsersIcon },
    { href: "/home/budget", icon: PieChartIcon },
    { href: "/home/warehouse", icon: ArchiveIcon },
  ];

  return (
    <nav className="flex h-full flex-row justify-around gap-6 border-t-[1px] border-t-white/20 px-4 py-3 sm:px-6">
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
