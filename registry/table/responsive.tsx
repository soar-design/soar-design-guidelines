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
    customer: "John Doe",
    product: "Laptop",
    quantity: 1,
    status: "Delivered",
    date: "2024-01-10",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    product: "Phone",
    quantity: 2,
    status: "Shipped",
    date: "2024-01-12",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    product: "Tablet",
    quantity: 1,
    status: "Processing",
    date: "2024-01-14",
  },
];

export default function ResponsiveTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead className="hidden md:table-cell">Customer</TableHead>
            <TableHead className="hidden sm:table-cell">Product</TableHead>
            <TableHead className="hidden lg:table-cell">Quantity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
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
