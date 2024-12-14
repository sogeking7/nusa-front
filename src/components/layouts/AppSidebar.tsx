import React from "react";
import { Button } from "../ui/button";
import {
  CodepenIcon,
  LayoutGridIcon,
  PieChartIcon,
  UsersIcon,
} from "lucide-react";

export const AppSidebar = (props: {}) => {
  return (
    <nav className="flex h-full flex-col justify-center gap-6 p-6 lg:p-8">
      <Button size={"icon"} className="h-14 w-14" variant={"outline"}>
        <LayoutGridIcon />
      </Button>
      <Button size={"icon"} className="h-14 w-14" variant={"outline"}>
        <UsersIcon />
      </Button>
      <Button size={"icon"} className="h-14 w-14" variant={"outline"}>
        <CodepenIcon />
      </Button>
      <Button size={"icon"} className="h-14 w-14" variant={"outline"}>
        <PieChartIcon />
      </Button>
    </nav>
  );
};
