"use client";

import {
  DataGrid,
  DataGridTable,
  DataGridPagination,
} from "@soar-design/soar-react-components";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  createColumnHelper,
  PaginationState,
} from "@tanstack/react-table";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  status: string;
};

const generateData = (count: number): User[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `المستخدم ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 3 === 0 ? "نشط" : i % 3 === 1 ? "غير نشط" : "قيد الانتظار",
  }));
};

const data = generateData(50);

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", {
    header: "المعرف",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "الاسم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "البريد الإلكتروني",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "الحالة",
    cell: (info) => info.getValue(),
  }),
];

export default function DataGridWithPagination() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <DataGrid table={table} recordCount={data.length}>
      <DataGridTable />
      <DataGridPagination />
    </DataGrid>
  );
}

