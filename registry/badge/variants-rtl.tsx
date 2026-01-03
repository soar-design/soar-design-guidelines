import { Badge } from "@soar-design/soar-react-components";

export default function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="primary">أساسي</Badge>
      <Badge variant="secondary">ثانوي</Badge>
      <Badge variant="success">نجاح</Badge>
      <Badge variant="info">معلومات</Badge>
      <Badge variant="warning">تحذير</Badge>
      <Badge variant="destructive">تدميري</Badge>
      <Badge variant="outline">حدودي</Badge>
    </div>
  );
}

