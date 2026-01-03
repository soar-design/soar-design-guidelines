import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardTable,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@soar-design/soar-react-components";

export default function CardWithTable() {
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>الطلبات الأخيرة</CardTitle>
        <CardDescription>أحدث طلبات العملاء لديك.</CardDescription>
      </CardHeader>
      <CardTable>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الطلب</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead className="text-left">المبلغ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#3001</TableCell>
              <TableCell>مكتمل</TableCell>
              <TableCell className="text-left">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3002</TableCell>
              <TableCell>قيد الانتظار</TableCell>
              <TableCell className="text-left">$150.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3003</TableCell>
              <TableCell>قيد المعالجة</TableCell>
              <TableCell className="text-left">$350.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardTable>
    </Card>
  );
}

