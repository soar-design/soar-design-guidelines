"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@soar-design/soar-react-components";

const products = [
  { id: "P001", name: "لابتوب برو", category: "إلكترونيات", price: "1,299 ر.س" },
  { id: "P002", name: "فأرة لاسلكية", category: "إكسسوارات", price: "29 ر.س" },
  { id: "P003", name: "كابل USB-C", category: "إكسسوارات", price: "15 ر.س" },
  { id: "P004", name: "شاشة 4K", category: "إلكترونيات", price: "599 ر.س" },
  { id: "P005", name: "لوحة مفاتيح", category: "إكسسوارات", price: "89 ر.س" },
];

export default function CompactTable() {
  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead className="h-10 px-2">المعرف</TableHead>
          <TableHead className="h-10 px-2">المنتج</TableHead>
          <TableHead className="h-10 px-2">الفئة</TableHead>
          <TableHead className="h-10 px-2 text-left">السعر</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="p-2 text-xs">{product.id}</TableCell>
            <TableCell className="p-2 text-xs font-medium">{product.name}</TableCell>
            <TableCell className="p-2 text-xs">{product.category}</TableCell>
            <TableCell className="p-2 text-xs text-left">{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

