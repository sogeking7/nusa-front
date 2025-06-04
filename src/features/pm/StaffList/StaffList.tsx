"use client";

import { Input } from "@/components/ui/input";
import { StaffListTable } from "@/features/pm/StaffList/StaffListTable";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useFilter } from "@/contexts/FilterContext";
import { staffService } from "@/lib/api-service";
import { format } from "date-fns";

export default function StaffList() {
  const [searchQuery, setSearchQuery] = useState("");
  const { institution, startDate, endDate } = useFilter();

  const shouldFetch = !!(startDate && institution);

  const { data: employees, isLoading } = useQuery({
    queryKey: ["staff", institution?.bin, startDate],
    queryFn: () => {
      if (!shouldFetch) {
        throw new Error("Invalid query");
      }
      return staffService.getStaff(
        institution.bin,
        format(startDate, "yyyy-MM-dd"),
      );
    },
    enabled: shouldFetch,
  });

  const filteredEmployees = employees
    ? employees.filter((employee) => {
        const searchLower = searchQuery.toLowerCase();
        return (
          `${employee.firstname} ${employee.lastname}`
            .toLowerCase()
            .includes(searchLower) ||
          employee.department.toLowerCase().includes(searchLower) ||
          employee.institution.toLowerCase().includes(searchLower)
        );
      })
    : [];

  return (
    <div className="rounded-xl border border-white/20 bg-inherit backdrop-blur-sm">
      <div className="flex w-full space-x-2 p-4 md:space-x-4">
        <Input
          leftIcon={<SearchIcon size={20} className="text-white/40" />}
          type="text"
          placeholder="Поиск по имени сотрудника..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
        <Button variant="outline" size="icon" className="shrink-0">
          <AlignRight />
        </Button>
      </div>
      {isLoading && (
        <div className="p-4 text-center text-white/60">Загрузка...</div>
      )}
      {!isLoading && employees && (
        <StaffListTable employees={filteredEmployees} />
      )}
    </div>
  );
}
