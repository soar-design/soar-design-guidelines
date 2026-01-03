"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@soar-design/soar-react-components";
import { FileX } from "lucide-react";

export default function EmptyStateTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="h-24 text-center">
            <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <FileX className="h-8 w-8" />
              <p className="text-sm">No results found.</p>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
