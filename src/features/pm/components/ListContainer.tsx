"use client";

import { Input } from "@/components/ui/input";
import { List } from "@/features/pm/components/List";
import { Employee } from "@/features/pm/types";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_EMPLOYEES: Employee[] = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: `emp-${i}`,
    name: "Жарасова Д.",
    position: "Менеджер",
    department: "Отдел",
    institution: "Учреждение",
  }));

export default function ListContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees] = useState<Employee[]>(MOCK_EMPLOYEES);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-3xl rounded-lg border border-white/20 bg-inherit backdrop-blur-sm">
      <div className="flex w-full space-x-4 p-7 pr-9">
        <Input
          leftIcon={<SearchIcon size={20} className="text-white/40" />}
          type="text"
          placeholder="Поиск по имени сотрудника..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
        <Button variant="outline" size="icon">
          <AlignRight />
        </Button>
      </div>
      <List employees={filteredEmployees} />
    </div>
  );
}
