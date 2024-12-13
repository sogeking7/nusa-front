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
    <header className="flex h-[90px] w-full items-center justify-between bg-transparent md:border-b-[1px] md:border-b-white/20">
      <Link
        href={"/home"}
        className="flex-shrink-0 max-md:hidden md:px-6 lg:px-8"
      >
        <img alt="logo" src={"/rezerv-logo.svg"} className="size-[56px]" />
      </Link>

      <Container
        variant={"largePadded"}
        className="flex items-center justify-between gap-4"
      >
        <div className="flex flex-1 items-center gap-4">
          <AppLeftSheet />
          <div className="w-full md:max-w-sm">
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
          <div className="flex items-center space-x-3">
            <Link href="#" className="text-sm text-white/40">
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
