import { Badge } from "@soar-design/soar-react-components";

export default function Component() {
  return (
    <div className="flex items-center gap-4">
      <Badge>أساسي</Badge>
      <Badge variant="secondary">ثانوي</Badge>
      <Badge variant="outline">حدودي</Badge>
      <Badge variant="destructive">تدميري</Badge>
      <Badge variant="success">نجاح</Badge>
      <Badge variant="warning">تحذير</Badge>
      <Badge variant="info">معلومات</Badge>
    </div>
  );
}

