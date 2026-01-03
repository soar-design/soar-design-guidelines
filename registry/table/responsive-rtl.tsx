"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@soar-design/soar-react-components";

const orders = [
  {
    id: "ORD001",
    customer: "أحمد محمد",
    product: "لابتوب",
    quantity: 1,
    status: "تم التسليم",
    date: "2024-01-10",
  },
  {
    id: "ORD002",
    customer: "فاطمة علي",
    product: "هاتف",
    quantity: 2,
    status: "تم الشحن",
    date: "2024-01-12",
  },
  {
    id: "ORD003",
    customer: "خالد حسن",
    product: "تابلت",
    quantity: 1,
    status: "قيد المعالجة",
    date: "2024-01-14",
  },
];

export default function ResponsiveTable() {
  return (
    <div className="rounded-md border" dir="rtl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>الطلب</TableHead>
            <TableHead className="hidden md:table-cell">العميل</TableHead>
            <TableHead className="hidden sm:table-cell">المنتج</TableHead>
            <TableHead className="hidden lg:table-cell">الكمية</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead className="hidden md:table-cell">التاريخ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell className="hidden md:table-cell">{order.customer}</TableCell>
              <TableCell className="hidden sm:table-cell">{order.product}</TableCell>
              <TableCell className="hidden lg:table-cell">{order.quantity}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="hidden md:table-cell">{order.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

