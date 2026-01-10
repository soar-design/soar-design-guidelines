import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@soar-design/soar-react-components";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "مدفوع",
    totalAmount: "$250.00",
    paymentMethod: "بطاقة ائتمانية",
  },
  {
    invoice: "INV002",
    paymentStatus: "قيد الانتظار",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "غير مدفوع",
    totalAmount: "$350.00",
    paymentMethod: "تحويل بنكي",
  },
  {
    invoice: "INV004",
    paymentStatus: "مدفوع",
    totalAmount: "$450.00",
    paymentMethod: "بطاقة ائتمانية",
  },
  {
    invoice: "INV005",
    paymentStatus: "مدفوع",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "قيد الانتظار",
    totalAmount: "$200.00",
    paymentMethod: "تحويل بنكي",
  },
  {
    invoice: "INV007",
    paymentStatus: "غير مدفوع",
    totalAmount: "$300.00",
    paymentMethod: "بطاقة ائتمانية",
  },
];

export function TableDemoDocsRTL() {
  return (
    <Table dir="rtl">
      <TableCaption>قائمة بفواتيرك الأخيرة.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-right">الفاتورة</TableHead>
          <TableHead className="text-right">الحالة</TableHead>
          <TableHead className="text-right">الطريقة</TableHead>
          <TableHead className="text-left">المبلغ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="text-right font-medium">
              {invoice.invoice}
            </TableCell>
            <TableCell className="text-right">
              {invoice.paymentStatus}
            </TableCell>
            <TableCell className="text-right">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="text-left">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="text-right">
            المجموع
          </TableCell>
          <TableCell className="text-left">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
