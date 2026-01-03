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
  { id: "INV001", status: "Paid", method: "Credit Card", amount: 250.0 },
  { id: "INV002", status: "Pending", method: "PayPal", amount: 150.0 },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: 350.0 },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: 450.0 },
  { id: "INV005", status: "Paid", method: "PayPal", amount: 550.0 },
  { id: "INV006", status: "Pending", method: "Bank Transfer", amount: 200.0 },
  { id: "INV007", status: "Paid", method: "Credit Card", amount: 300.0 },
];

export default function TableWithFooter() {
  const total = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">${total.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
