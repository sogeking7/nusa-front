"use client";

import * as React from "react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { InstitutionModel, institutionService } from "@/lib/api-service";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

interface InstitutionSelectorProps {
  institution: InstitutionModel | null;
  setInstitution: (institution: InstitutionModel | null) => void;
}

export function InstitutionSelector({
  institution,
  setInstitution,
}: InstitutionSelectorProps) {
  const [open, setOpen] = React.useState(false);

  const { data: institutions, isLoading } = useQuery({
    queryKey: ["institutions"],
    queryFn: institutionService.getInstitutions,
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[350px] justify-between",
            !institution && "text-muted-foreground",
          )}
        >
          <span className="truncate">
            {institution ? institution.name : "Выберите филиал"}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        <div className="max-h-[300px] overflow-auto">
          {isLoading && <div className="px-4 py-2 text-center">Загрузка...</div>}
          {!isLoading &&
            institutions &&
            institutions.map((inst) => (
              <div
                key={inst.guid}
                className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-secondary"
                onClick={() => {
                  setInstitution(inst);
                  setOpen(false);
                }}
              >
                <span
                  className={cn(
                    inst.guid === institution?.guid && "font-medium",
                  )}
                >
                  {inst.name}
                </span>
                {inst.guid === institution?.guid && (
                  <X
                    onClick={(e) => {
                      e.stopPropagation();
                      setInstitution(null);
                      setOpen(false);
                    }}
                    className="h-4 w-4"
                  />
                )}
              </div>
            ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
