import { Badge } from "@soar-design/soar-react-components";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="primary" appearance="outline">
        أساسي
      </Badge>
      <Badge variant="success" appearance="outline">
        نجاح
      </Badge>
      <Badge variant="warning" appearance="outline">
        تحذير
      </Badge>
      <Badge variant="info" appearance="outline">
        معلومات
      </Badge>
      <Badge variant="destructive" appearance="outline">
        تدميري
      </Badge>
    </div>
  );
}

