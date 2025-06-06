"use client";

import { Input } from "@/components/ui/input";
import { StaffListTable } from "@/features/pm/StaffList/StaffListTable";
import { SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFilter } from "@/contexts/FilterContext";
import { staffService } from "@/lib/api-service";
import { format } from "date-fns";

export default function StaffList() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [searchQuery, setSearchQuery] = useState("");
  const { institution, startDate } = useFilter();

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

  const filteredEmployees = useMemo(() => {
    if (!employees) return [];

    const searchLower = searchQuery.toLowerCase();

    return employees.filter((employee) => {
      return (
        `${employee.firstname} ${employee.lastname}`
          .toLowerCase()
          .includes(searchLower) ||
        employee.institution_name.toLowerCase().includes(searchLower)
      );
    });
  }, [employees, searchQuery]);

  const paginatedEmployees = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return filteredEmployees.slice(startIndex, startIndex + pageSize);
  }, [filteredEmployees, page]);

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
      </div>
      {(isLoading || !shouldFetch) && (
        <div className="flex items-center justify-center pb-8 pt-4 text-center text-sm text-zinc-400">
          {!shouldFetch && <> Выберите период и филиал</>}
          {isLoading && (
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
          )}
        </div>
      )}
      {!isLoading && employees && (
        <StaffListTable
          employees={paginatedEmployees}
          totalCount={filteredEmployees.length}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
