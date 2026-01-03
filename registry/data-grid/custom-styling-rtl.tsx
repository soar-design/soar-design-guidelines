"use client";

import { DataGrid, DataGridTable } from "@soar-design/soar-react-components";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from "@tanstack/react-table";

type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
};

const data: Employee[] = [
  { id: 1, name: "أليس جونسون", department: "الهندسة", salary: 95000 },
  { id: 2, name: "بوب سميث", department: "التسويق", salary: 75000 },
  { id: 3, name: "كارول وايت", department: "الهندسة", salary: 105000 },
  { id: 4, name: "ديفيد براون", department: "المبيعات", salary: 85000 },
  { id: 5, name: "إيف ديفيس", department: "التسويق", salary: 70000 },
];

const columnHelper = createColumnHelper<Employee>();

const columns = [
  columnHelper.accessor("name", {
    header: "الموظف",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("department", {
    header: "القسم",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("salary", {
    header: "الراتب",
    cell: (info) => `$${info.getValue().toLocaleString()}`,
  }),
];

export default function DataGridCustomStyling() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DataGrid
      table={table}
      recordCount={data.length}
      tableLayout={{
        dense: true,
        stripped: true,
        rowRounded: true,
        headerBackground: true,
        cellBorder: false,
      }}
    >
      <DataGridTable />
    </DataGrid>
  );
}
