"use client";

import {
  DataGrid,
  DataGridTable,
  DataGridColumnFilter,
} from "@soar-design/soar-react-components";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  createColumnHelper,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { useState } from "react";
import { Circle, Square, Triangle } from "lucide-react";

type Item = {
  id: number;
  name: string;
  category: string;
  status: string;
};

const data: Item[] = [
  { id: 1, name: "Item A", category: "Electronics", status: "available" },
  { id: 2, name: "Item B", category: "Furniture", status: "sold" },
  { id: 3, name: "Item C", category: "Electronics", status: "available" },
  { id: 4, name: "Item D", category: "Clothing", status: "pending" },
  { id: 5, name: "Item E", category: "Furniture", status: "available" },
  { id: 6, name: "Item F", category: "Clothing", status: "sold" },
];

const columnHelper = createColumnHelper<Item>();

const categoryOptions = [
  { label: "Electronics", value: "Electronics", icon: Circle },
  { label: "Furniture", value: "Furniture", icon: Square },
  { label: "Clothing", value: "Clothing", icon: Triangle },
];

const statusOptions = [
  { label: "Available", value: "available" },
  { label: "Sold", value: "sold" },
  { label: "Pending", value: "pending" },
];

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span className="capitalize">{info.getValue()}</span>
    ),
  }),
];

export default function DataGridWithFiltering() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4">
      <DataGrid table={table} recordCount={data.length}>
        <div className="mb-4 flex gap-2">
          <DataGridColumnFilter
            column={table.getColumn("category")}
            title="Category"
            options={categoryOptions}
          />
          <DataGridColumnFilter
            column={table.getColumn("status")}
            title="Status"
            options={statusOptions}
          />
        </div>
        <DataGridTable />
      </DataGrid>
    </div>
  );
}

