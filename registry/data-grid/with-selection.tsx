"use client";

import { DataGrid, DataGridTable, Button } from "@soar-design/soar-react-components";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  RowSelectionState,
} from "@tanstack/react-table";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  priority: string;
  status: string;
};

const data: Task[] = [
  { id: 1, title: "Fix login bug", priority: "High", status: "In Progress" },
  { id: 2, title: "Update documentation", priority: "Low", status: "Todo" },
  { id: 3, title: "Refactor API", priority: "Medium", status: "In Progress" },
  { id: 4, title: "Add tests", priority: "High", status: "Todo" },
  { id: 5, title: "Deploy to staging", priority: "Medium", status: "Done" },
];

const columnHelper = createColumnHelper<Task>();

const columns = [
  columnHelper.accessor("title", {
    header: "Task",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("priority", {
    header: "Priority",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
];

export default function DataGridWithSelection() {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  });

  const selectedCount = Object.keys(rowSelection).length;

  return (
    <div className="space-y-4">
      <DataGrid table={table} recordCount={data.length}>
        {selectedCount > 0 && (
          <div className="mb-4 flex items-center justify-between rounded-lg border bg-muted p-3">
            <p className="text-sm">
              {selectedCount} {selectedCount === 1 ? "item" : "items"} selected
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setRowSelection({})}
            >
              Clear selection
            </Button>
          </div>
        )}
        <DataGridTable />
      </DataGrid>
    </div>
  );
}

