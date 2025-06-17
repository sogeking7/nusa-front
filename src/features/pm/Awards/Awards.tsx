"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { AwardsDialog } from "@/features/pm/Awards/AwardsDialog";

export const Awards = ({ staffId }: { staffId: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className={"cursor-pointer !rounded-xl border border-white/20"}>
        <CardContent className="flex items-center justify-between !p-4">
          <h2 className="font-semibold text-white">Награды</h2>
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            <ArrowUpRight />
          </Button>
        </CardContent>
      </Card>
      <AwardsDialog
        staffId={staffId}
        isOpen={open}
        onCloseAction={() => setOpen(false)}
      />
    </>
  );
};
