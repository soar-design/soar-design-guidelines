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
  { id: 1, title: "إصلاح خطأ تسجيل الدخول", priority: "عالي", status: "قيد التنفيذ" },
  { id: 2, title: "تحديث الوثائق", priority: "منخفض", status: "مهام" },
  { id: 3, title: "إعادة هيكلة API", priority: "متوسط", status: "قيد التنفيذ" },
  { id: 4, title: "إضافة اختبارات", priority: "عالي", status: "مهام" },
  { id: 5, title: "نشر إلى بيئة الاختبار", priority: "متوسط", status: "منجز" },
];

const columnHelper = createColumnHelper<Task>();

const columns = [
  columnHelper.accessor("title", {
    header: "المهمة",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("priority", {
    header: "الأولوية",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "الحالة",
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
              {selectedCount} {selectedCount === 1 ? "عنصر محدد" : "عناصر محددة"}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setRowSelection({})}
            >
              مسح التحديد
            </Button>
          </div>
        )}
        <DataGridTable />
      </DataGrid>
    </div>
  );
}

