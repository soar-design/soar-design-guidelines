"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@soar-design/soar-react-components";

const invoices = [
  { id: "INV001", status: "مدفوع", method: "بطاقة ائتمانية", amount: 250.0 },
  { id: "INV002", status: "معلق", method: "PayPal", amount: 150.0 },
  { id: "INV003", status: "غير مدفوع", method: "تحويل بنكي", amount: 350.0 },
  { id: "INV004", status: "مدفوع", method: "بطاقة ائتمانية", amount: 450.0 },
  { id: "INV005", status: "مدفوع", method: "PayPal", amount: 550.0 },
  { id: "INV006", status: "معلق", method: "تحويل بنكي", amount: 200.0 },
  { id: "INV007", status: "مدفوع", method: "بطاقة ائتمانية", amount: 300.0 },
];

export default function TableWithFooter() {
  const total = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead>الفاتورة</TableHead>
          <TableHead>الحالة</TableHead>
          <TableHead>الطريقة</TableHead>
          <TableHead className="text-left">المبلغ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-left">{invoice.amount.toFixed(2)} ر.س</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>الإجمالي</TableCell>
          <TableCell className="text-left">{total.toFixed(2)} ر.س</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

