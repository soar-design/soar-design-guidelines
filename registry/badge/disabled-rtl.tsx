import { Badge } from "@soar-design/soar-react-components";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="primary" appearance="ghost" disabled>
        شفاف
      </Badge>
      <Badge variant="primary" disabled>
        صلب
      </Badge>
      <Badge variant="primary" appearance="light" disabled>
        فاتح
      </Badge>
      <Badge variant="primary" appearance="outline" disabled>
        حدودي
      </Badge>
    </div>
  );
}

