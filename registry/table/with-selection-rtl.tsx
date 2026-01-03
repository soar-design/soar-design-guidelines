"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Checkbox,
} from "@soar-design/soar-react-components";

const users = [
  { id: "1", name: "أحمد محمد", email: "ahmed@example.com", role: "مدير" },
  { id: "2", name: "فاطمة علي", email: "fatima@example.com", role: "مستخدم" },
  { id: "3", name: "خالد حسن", email: "khalid@example.com", role: "مستخدم" },
  { id: "4", name: "سارة إبراهيم", email: "sara@example.com", role: "محرر" },
  { id: "5", name: "مريم أحمد", email: "mariam@example.com", role: "مستخدم" },
];

export default function TableWithSelection() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const isSelected = (id: string) => selectedIds.includes(id);
  const isAllSelected = selectedIds.length === users.length;
  const isIndeterminate = selectedIds.length > 0 && selectedIds.length < users.length;

  const toggleAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(users.map((user) => user.id));
    }
  };

  const toggleRow = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-4" dir="rtl">
      <div className="text-sm text-muted-foreground">
        تم تحديد {selectedIds.length} من {users.length} صف(وف).
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={isIndeterminate ? "indeterminate" : isAllSelected}
                onCheckedChange={toggleAll}
              />
            </TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>البريد الإلكتروني</TableHead>
            <TableHead>الدور</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} data-state={isSelected(user.id) ? "selected" : undefined}>
              <TableCell>
                <Checkbox
                  checked={isSelected(user.id)}
                  onCheckedChange={() => toggleRow(user.id)}
                />
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

