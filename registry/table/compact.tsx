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
  { id: "P001", name: "Laptop Pro", category: "Electronics", price: "$1,299" },
  { id: "P002", name: "Wireless Mouse", category: "Accessories", price: "$29" },
  { id: "P003", name: "USB-C Cable", category: "Accessories", price: "$15" },
  { id: "P004", name: "Monitor 4K", category: "Electronics", price: "$599" },
  { id: "P005", name: "Keyboard", category: "Accessories", price: "$89" },
];

export default function CompactTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="h-10 px-2">ID</TableHead>
          <TableHead className="h-10 px-2">Product</TableHead>
          <TableHead className="h-10 px-2">Category</TableHead>
          <TableHead className="h-10 px-2 text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="p-2 text-xs">{product.id}</TableCell>
            <TableCell className="p-2 text-xs font-medium">{product.name}</TableCell>
            <TableCell className="p-2 text-xs">{product.category}</TableCell>
            <TableCell className="p-2 text-xs text-right">{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
