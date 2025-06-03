"use client";

import * as React from "react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type BranchSelectorProps = {
  branch: string;
  onChange: (value: string) => void;
  className?: string;
};

export function BranchSelector({
  branch,
  onChange,
  className,
}: BranchSelectorProps) {
  const [open, setOpen] = React.useState(false);

  // Sample branch list - replace with actual data in a real implementation
  const branches = [
    'РГП на ПХВ "Резерва МЧС РК; Филиал..."',
    "Филиал в городе Астана",
    "Филиал в городе Алматы",
    "Филиал в Карагандинской области",
    "Филиал в Актюбинской области",
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[350px] justify-between border-white/20 bg-transparent text-white"
        >
          <span className="truncate">{branch}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        <div className="max-h-[300px] overflow-auto">
          {branches.map((branchName) => (
            <div
              key={branchName}
              className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-secondary"
              onClick={() => {
                onChange(branchName);
                setOpen(false);
              }}
            >
              <span className={`${branch === branchName ? "font-medium" : ""}`}>
                {branchName}
              </span>
              {branch === branchName && <X className="h-4 w-4" />}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
