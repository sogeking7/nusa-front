"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { DisciplinaryDialog } from "@/features/pm/Disciplinary/DisciplinaryDialog";

export const Disciplinary = ({ staffId }: { staffId: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className={"cursor-pointer !rounded-xl border border-white/20"}>
        <CardContent className="flex items-center justify-between !p-4">
          <h2 className="font-semibold text-white">Дисциплинарки</h2>
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
      <DisciplinaryDialog
        staffId={staffId}
        isOpen={open}
        onCloseAction={() => setOpen(false)}
      />
    </>
  );
};
