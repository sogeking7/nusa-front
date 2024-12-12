"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellIcon, MoonIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "@/ui/Container";

export default function AppHeader() {
  const [searchQuery, setSearchQuery] = useState("");

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
        <div className="flex items-center space-x-6 flex-1">
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
          <Button variant="outline" size="icon">
            <MoonIcon className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <BellIcon className="h-5 w-5" />
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
