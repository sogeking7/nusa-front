"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { StaffModel } from "@/lib/api-service";
import { User } from "lucide-react";

interface ListRowProps {
  employee: StaffModel;
  className?: string;
}

export function StaffListTableRow({ employee, className }: ListRowProps) {
  const router = useRouter();
  const fullName = `${employee.firstname} ${employee.lastname}`;

  const handleClick = () => {
    router.push(`/home/stuff/${employee.staff_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        "flex cursor-pointer items-center gap-2 p-4 text-white transition-colors hover:bg-white/10 md:gap-4",
        className,
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
        <User className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{fullName}</p>
        <p className="text-sm text-[#898989]">{employee.gender}</p>
      </div>
      <div className="flex-1 text-center text-sm">
        {employee.institution_name}
      </div>
      <div className="flex-1 text-center text-sm">
        {employee.department_name}
      </div>
    </div>
  );
}
