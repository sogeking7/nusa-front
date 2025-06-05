"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
  ArchiveIcon,
  BellIcon,
  LayoutGridIcon,
  MoonIcon,
  PanelRight,
  PieChartIcon,
  UsersIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const AppLeftSheet = () => {
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <PanelRight className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className={cn("bg-[#1C1C1D]", "border-none text-white")}
        side={"left"}
      >
        <SheetHeader>
          <SheetTitle className={"text-white/2"}></SheetTitle>
          <SheetDescription className={"flex flex-col space-y-16"}>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Link href="#" className="text-white">
                  Morty Smith
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  size={"icon"}
                  onClick={() => router.push("#")}
                  variant={"outline"}
                >
                  <MoonIcon />
                </Button>
                <Link href="#" className="text-white">
                  Темный режим
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  size={"icon"}
                  onClick={() => router.push("#")}
                  variant={"outline"}
                >
                  <BellIcon />
                </Button>
                <Link href="#" className="text-white">
                  Уведомлений
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Button
                  size={"icon"}
                  onClick={() => router.push("/home/map")}
                  variant={"outline"}
                >
                  <LayoutGridIcon />
                </Button>
                <Link href="#" className="text-white">
                  Филиалы
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  size={"icon"}
                  onClick={() => router.push("/home/stuff")}
                  variant={"outline"}
                >
                  <UsersIcon />
                </Button>
                <Link href="#" className="text-white">
                  Панель управления кадрами
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  size={"icon"}
                  onClick={() => router.push("/home/budget")}
                  variant={"outline"}
                >
                  <PieChartIcon />
                </Button>
                <Link href="#" className="text-white">
                  Бюджет
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  size={"icon"}
                  onClick={() => router.push("/home/warehouse")}
                  variant={"outline"}
                >
                  <ArchiveIcon />
                </Button>
                <Link href="#" className="text-white">
                  Склад
                </Link>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
