import { Badge } from "@soar-design/soar-react-components";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="primary" appearance="light">
        أساسي
      </Badge>
      <Badge variant="success" appearance="light">
        نجاح
      </Badge>
      <Badge variant="warning" appearance="light">
        تحذير
      </Badge>
      <Badge variant="info" appearance="light">
        معلومات
      </Badge>
      <Badge variant="destructive" appearance="light">
        تدميري
      </Badge>
    </div>
  );
}

