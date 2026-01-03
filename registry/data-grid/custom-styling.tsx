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
  { id: 1, name: "Alice Johnson", department: "Engineering", salary: 95000 },
  { id: 2, name: "Bob Smith", department: "Marketing", salary: 75000 },
  { id: 3, name: "Carol White", department: "Engineering", salary: 105000 },
  { id: 4, name: "David Brown", department: "Sales", salary: 85000 },
  { id: 5, name: "Eve Davis", department: "Marketing", salary: 70000 },
];

const columnHelper = createColumnHelper<Employee>();

const columns = [
  columnHelper.accessor("name", {
    header: "Employee",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("department", {
    header: "Department",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("salary", {
    header: "Salary",
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

