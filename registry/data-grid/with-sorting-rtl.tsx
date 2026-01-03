"use client";

import { DataGrid, DataGridTable } from "@soar-design/soar-react-components";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  createColumnHelper,
  SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

const data: Product[] = [
  { id: 1, name: "Laptop", price: 999, stock: 15 },
  { id: 2, name: "Mouse", price: 29, stock: 150 },
  { id: 3, name: "Keyboard", price: 79, stock: 85 },
  { id: 4, name: "Monitor", price: 299, stock: 42 },
  { id: 5, name: "Headphones", price: 149, stock: 67 },
];

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor("name", {
    header: "المنتج",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: "السعر",
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor("stock", {
    header: "المخزون",
    cell: (info) => info.getValue(),
  }),
];

export default function DataGridWithSorting() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <DataGrid table={table} recordCount={data.length}>
      <DataGridTable />
    </DataGrid>
  );
}

