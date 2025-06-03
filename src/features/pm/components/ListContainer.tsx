"use client";

import { Input } from "@/components/ui/input";
import { List } from "@/features/pm/components/List";
import { StaffService } from "@/features/pm/api/staff.service";
import { Staff } from "@/features/pm/api/staff.service.types";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ListContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState<Staff[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      const staffService = StaffService();
      const response = await staffService.getStaff();

      if (response.success) {
        setEmployees(response.data.data);
      } else {
        console.error("Failed to fetch staff:", response.data);
      }
      setIsLoading(false);
    };

    fetchStaff();
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      `${employee.firstname} ${employee.lastname}`
        .toLowerCase()
        .includes(searchLower) ||
      employee.department.toLowerCase().includes(searchLower) ||
      employee.institution.toLowerCase().includes(searchLower)
    );
  });

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
      {isLoading ? (
        <div className="p-4 text-center text-white/60">Загрузка...</div>
      ) : (
        <List employees={filteredEmployees} />
      )}
    </div>
  );
}
