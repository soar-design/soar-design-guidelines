"use client"

import {
  DirectionProvider,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@soar-design/soar-react-components"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const paymentStatusMap: Record<string, string> = {
  Paid: "مدفوع",
  Pending: "قيد الانتظار",
  Unpaid: "غير مدفوع",
}

const paymentMethodMap: Record<string, string> = {
  "Credit Card": "بطاقة ائتمانية",
  PayPal: "PayPal",
  "Bank Transfer": "تحويل بنكي",
}

export function TableFooterExample() {
  return (
    <DirectionProvider dir="rtl">
      <Table>
        <TableCaption>قائمة بفواتيرك الأخيرة.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">الفاتورة</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>الطريقة</TableHead>
            <TableHead className="text-right">المبلغ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.slice(0, 3).map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{paymentStatusMap[invoice.paymentStatus]}</TableCell>
              <TableCell>{paymentMethodMap[invoice.paymentMethod]}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>المجموع</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </DirectionProvider>
  )
}
