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
  BellIcon,
  CodepenIcon,
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
        className={cn("bg-[#1C1C1D]", "text-white border-none")}
        side={"left"}
      >
        <SheetHeader>
          <SheetTitle className={"text-white/2"}></SheetTitle>
          <SheetDescription className={"flex flex-col space-y-16"}>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-3 items-center">
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
              <div className="flex space-x-3 items-center">
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

              <div className="flex space-x-3 items-center">
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
              <div className="flex space-x-3 items-center">
                <Button
                  size={"icon"}
                  onClick={() => router.push("#")}
                  variant={"outline"}
                >
                  <LayoutGridIcon />
                </Button>
                <Link href="#" className="text-white">
                  Layout grid icon
                </Link>
              </div>

              <div className="flex space-x-3 items-center">
                <Button
                  size={"icon"}
                  onClick={() => router.push("#")}
                  variant={"outline"}
                >
                  <UsersIcon />
                </Button>
                <Link href="#" className="text-white">
                  Users icon
                </Link>
              </div>

              <div className="flex space-x-3 items-center">
                <Button
                  size={"icon"}
                  onClick={() => router.push("#")}
                  variant={"outline"}
                >
                  <CodepenIcon />
                </Button>
                <Link href="#" className="text-white">
                  Codepen icon
                </Link>
              </div>

              <div className="flex space-x-3 items-center">
                <Button
                  size={"icon"}
                  onClick={() => router.push("#")}
                  variant={"outline"}
                >
                  <PieChartIcon />
                </Button>
                <Link href="#" className="text-white">
                  PieChart icon
                </Link>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
