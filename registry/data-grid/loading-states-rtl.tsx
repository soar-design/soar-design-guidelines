"use client";

import { DataGrid, DataGridTable, Button } from "@soar-design/soar-react-components";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { useState } from "react";

type Order = {
  id: number;
  customer: string;
  amount: number;
  status: string;
};

const data: Order[] = [
  { id: 1, customer: "جون دو", amount: 99.99, status: "مكتمل" },
  { id: 2, customer: "جين سميث", amount: 149.5, status: "قيد الانتظار" },
  { id: 3, customer: "بوب جونسون", amount: 249.0, status: "مكتمل" },
];

const columnHelper = createColumnHelper<Order>();

const columns = [
  columnHelper.accessor("id", {
    header: "رقم الطلب",
    cell: (info) => `#${info.getValue()}`,
  }),
  columnHelper.accessor("customer", {
    header: "العميل",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "المبلغ",
    cell: (info) => `$${info.getValue().toFixed(2)}`,
  }),
  columnHelper.accessor("status", {
    header: "الحالة",
    cell: (info) => info.getValue(),
  }),
];

export default function DataGridLoadingStates() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMode, setLoadingMode] = useState<"skeleton" | "spinner">("skeleton");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      <DataGrid
        table={table}
        recordCount={data.length}
        isLoading={isLoading}
        loadingMode={loadingMode}
      >
        <div className="mb-4 flex gap-2">
          <Button
            onClick={() => {
              setLoadingMode("skeleton");
              simulateLoading();
            }}
            size="sm"
          >
            تحميل الهيكل العظمي
          </Button>
          <Button
            onClick={() => {
              setLoadingMode("spinner");
              simulateLoading();
            }}
            size="sm"
          >
            تحميل الدوران
          </Button>
        </div>
        <DataGridTable />
      </DataGrid>
    </div>
  );
}
