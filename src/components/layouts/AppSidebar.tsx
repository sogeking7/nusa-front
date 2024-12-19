import React from "react";
import { Button } from "../ui/button";
import {
  CodepenIcon,
  LayoutGridIcon,
  PieChartIcon,
  UsersIcon,
} from "lucide-react";

export const AppSidebar = () => {
  return (
    <nav className="fixed top-1/2 flex h-full -translate-y-1/2 flex-col justify-center gap-6 p-4">
      <Button size={"icon"} className="size-10" variant={"outline"}>
        <LayoutGridIcon />
      </Button>
      <Button size={"icon"} className="size-10" variant={"outline"}>
        <UsersIcon />
      </Button>
      <Button size={"icon"} className="size-10" variant={"outline"}>
        <CodepenIcon />
      </Button>
      <Button size={"icon"} className="size-10" variant={"outline"}>
        <PieChartIcon />
      </Button>
    </nav>
  );
};
