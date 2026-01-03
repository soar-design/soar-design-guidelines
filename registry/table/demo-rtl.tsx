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

const subscriptions = [
  {
    subscriptionId: "SUB001",
    customerName: "أحمد محمد",
    plan: "احترافي",
    status: "نشط",
    renewalDate: "2024-02-15",
    amount: "49.99 ر.س",
  },
  {
    subscriptionId: "SUB002",
    customerName: "فاطمة علي",
    plan: "أساسي",
    status: "ملغي",
    renewalDate: "2024-01-10",
    amount: "19.99 ر.س",
  },
  {
    subscriptionId: "SUB003",
    customerName: "خالد حسن",
    plan: "مؤسسي",
    status: "معلق",
    renewalDate: "2024-03-01",
    amount: "99.99 ر.س",
  },
  {
    subscriptionId: "SUB004",
    customerName: "سارة إبراهيم",
    plan: "احترافي",
    status: "نشط",
    renewalDate: "2024-02-20",
    amount: "49.99 ر.س",
  },
  {
    subscriptionId: "SUB005",
    customerName: "محمد عبدالله",
    plan: "أساسي",
    status: "نشط",
    renewalDate: "2024-02-05",
    amount: "19.99 ر.س",
  },
];

export default function TableDemo() {
  return (
    <Table dir="rtl">
      <TableCaption>قائمة بالاشتراكات النشطة والسابقة.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">رقم المرجع</TableHead>
          <TableHead>اسم العميل</TableHead>
          <TableHead>الخطة</TableHead>
          <TableHead>الحالة</TableHead>
          <TableHead>تاريخ التجديد</TableHead>
          <TableHead className="text-left">المبلغ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscriptions.map((sub) => (
          <TableRow key={sub.subscriptionId}>
            <TableCell className="font-medium">{sub.subscriptionId}</TableCell>
            <TableCell>{sub.customerName}</TableCell>
            <TableCell>{sub.plan}</TableCell>
            <TableCell>
              <span
                className={`${sub.status === "نشط" ? "text-green-600" : sub.status === "ملغي" ? "text-red-600" : "text-yellow-600"}`}
              >
                {sub.status}
              </span>
            </TableCell>
            <TableCell>{sub.renewalDate}</TableCell>
            <TableCell className="text-left">{sub.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>إجمالي الإيرادات</TableCell>
          <TableCell className="text-left">
            {subscriptions
              .filter((sub) => sub.status === "نشط")
              .reduce((total, sub) => total + parseFloat(sub.amount.split(" ")[0]), 0)
              .toLocaleString("ar-SA", {
                style: "currency",
                currency: "SAR",
              })}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

