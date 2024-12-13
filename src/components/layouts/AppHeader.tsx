"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellIcon, MoonIcon, PanelRight, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { AppLeftSheet } from "./AppLeftSheet";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <header className="w-full h-[90px] bg-transparent md:border-b-white/20 md:border-b-[1px] flex items-center justify-between">
      <Link
        href={"/home"}
        className="max-md:hidden md:px-6 lg:px-8 flex-shrink-0"
      >
        <img alt="logo" src={"/rezerv-logo.svg"} className="size-[56px]" />
      </Link>

      <Container
        variant={"largePadded"}
        className="flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4 flex-1">
          <AppLeftSheet />
          <div className="md:max-w-sm w-full">
            <Input
              leftIcon={<SearchIcon size={20} className="text-white/40" />}
              type="text"
              placeholder="Введите для поиска..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 max-md:hidden">
          <div className="flex space-x-3 items-center">
            <Link href="#" className="text-white/40 text-sm">
              Темный режим
            </Link>
            <Button
              size={"icon"}
              onClick={() => router.push("#")}
              variant={"outline"}
            >
              <MoonIcon />
            </Button>
          </div>
          <Button variant="outline" size="icon">
            <BellIcon />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </Container>
    </header>
  );
}
