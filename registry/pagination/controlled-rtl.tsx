"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function PaginationControlled() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <Button
              variant={currentPage === i ? "primary" : "outline"}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </Button>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      pages.push(
        <PaginationItem key={1}>
          <Button
            variant={currentPage === 1 ? "primary" : "outline"}
            onClick={() => handlePageChange(1)}
          >
            1
          </Button>
        </PaginationItem>
      );

      if (currentPage > 3) {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(
          <PaginationItem key={i}>
            <Button
              variant={currentPage === i ? "primary" : "outline"}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </Button>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Always show last page
      pages.push(
        <PaginationItem key={totalPages}>
          <Button
            variant={currentPage === totalPages ? "primary" : "outline"}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </Button>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <div className="space-y-4" dir="rtl">
      <div className="text-center text-sm text-muted-foreground">
        صفحة {currentPage} من {totalPages}
      </div>
      <Pagination dir="rtl">
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            </Button>
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

