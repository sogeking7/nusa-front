"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellIcon, MoonIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "@/ui/Container";
import { AppLeftSheet } from "./AppLeftSheet";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-[#1C1C1D] md:border-b-[1px] md:border-b-white/20">
      <Link href={"/home/map"} className="flex-shrink-0 px-4 max-md:hidden">
        <img alt="logo" src={"/rezerv-logo.svg"} className="size-11" />
      </Link>
      <Container className="flex items-center justify-between gap-4">
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
