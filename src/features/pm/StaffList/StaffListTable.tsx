"use client";

import { twMerge } from "tailwind-merge";
import { StaffListTableRow } from "./StaffListTableRow";
import { StaffModel } from "@/lib/api-service";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface StaffListTableProps {
  employees: StaffModel[];
  totalCount: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function StaffListTable({
  employees,
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  className,
}: StaffListTableProps) {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className={twMerge("divide-y divide-white/20", className)}>
      {employees.map((employee) => (
        <StaffListTableRow key={employee.staff_id} employee={employee} />
      ))}
      <Pagination className="p-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(Math.max(currentPage - 1, 1));
              }}
            />
          </PaginationItem>

          {(() => {
            const pageNumbers: (number | string)[] = [];

            if (totalPages <= 7) {
              // Show all pages if there aren't too many
              for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
              }
            } else {
              pageNumbers.push(1);

              if (currentPage > 4) {
                pageNumbers.push("...");
              }

              const startPage = Math.max(2, currentPage - 1);
              const endPage = Math.min(totalPages - 1, currentPage + 1);

              for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
              }

              if (currentPage < totalPages - 3) {
                pageNumbers.push("...");
              }

              pageNumbers.push(totalPages);
            }

            return pageNumbers.map((page, index) =>
              page === "..." ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(Number(page));
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ),
            );
          })()}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(Math.min(currentPage + 1, totalPages));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
