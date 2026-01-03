import { Badge } from "@soar-design/soar-react-components";
import { Table, TableBody, TableCell, TableRow } from "@soar-design/soar-react-components";

export default function TableDemo() {
  return (
    <div className="border border-border rounded-lg overflow-hidden" dir="rtl">
      <Table className="w-full md:w-[350px]">
        <TableBody>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-l">
            <TableCell className="bg-muted/50 py-2 font-medium">الاسم</TableCell>
            <TableCell className="py-2">سارة أحمد</TableCell>
          </TableRow>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-l">
            <TableCell className="bg-muted/50 py-2 font-medium">البريد الإلكتروني</TableCell>
            <TableCell className="py-2">s.ahmed@company.com</TableCell>
          </TableRow>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-l">
            <TableCell className="bg-muted/50 py-2 font-medium">الموقع</TableCell>
            <TableCell className="py-2">الرياض، السعودية</TableCell>
          </TableRow>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-l">
            <TableCell className="bg-muted/50 py-2 font-medium">الدور</TableCell>
            <TableCell className="py-2">
              <Badge variant="secondary">مدير</Badge>
            </TableCell>
          </TableRow>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-l">
            <TableCell className="bg-muted/50 py-2 font-medium">الحالة</TableCell>
            <TableCell className="py-2">
              <Badge variant="primary">نشط</Badge>
            </TableCell>
          </TableRow>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-l">
            <TableCell className="bg-muted/50 py-2 font-medium">آخر تسجيل دخول</TableCell>
            <TableCell className="py-2">25 يناير 2025</TableCell>
          </TableRow>
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-l">
            <TableCell className="bg-muted/50 py-2 font-medium">الرصيد</TableCell>
            <TableCell className="py-2">1,250.00 ر.س</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

