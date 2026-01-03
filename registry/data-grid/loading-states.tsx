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
  { id: 1, customer: "John Doe", amount: 99.99, status: "Completed" },
  { id: 2, customer: "Jane Smith", amount: 149.5, status: "Pending" },
  { id: 3, customer: "Bob Johnson", amount: 249.0, status: "Completed" },
];

const columnHelper = createColumnHelper<Order>();

const columns = [
  columnHelper.accessor("id", {
    header: "Order ID",
    cell: (info) => `#${info.getValue()}`,
  }),
  columnHelper.accessor("customer", {
    header: "Customer",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => `$${info.getValue().toFixed(2)}`,
  }),
  columnHelper.accessor("status", {
    header: "Status",
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
            Skeleton Loading
          </Button>
          <Button
            onClick={() => {
              setLoadingMode("spinner");
              simulateLoading();
            }}
            size="sm"
          >
            Spinner Loading
          </Button>
        </div>
        <DataGridTable />
      </DataGrid>
    </div>
  );
}

