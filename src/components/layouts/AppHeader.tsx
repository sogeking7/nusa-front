"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellIcon, MoonIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AppHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full h-[75px] bg-transparent border-b-white/20 border-b-[1px] flex items-center justify-between px-6">
      <div className="flex items-center space-x-6 flex-1">
        <Link href={"/home"}>
          <Image alt="logo" src={"/rezerv-logo.svg"} width={50} height={50} />
        </Link>

        <div className="max-w-sm w-full">
          <Input
            leftIcon={<SearchIcon size={20} className="text-white/40" />}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
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
    </header>
  );
}
