import { Badge } from "@soar-design/soar-react-components";

export default function BadgeAppearances() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Badge variant="primary" appearance="default">
          افتراضي
        </Badge>
        <Badge variant="secondary" appearance="default">
          افتراضي
        </Badge>
        <Badge variant="success" appearance="default">
          افتراضي
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="primary" appearance="outline">
          حدودي
        </Badge>
        <Badge variant="secondary" appearance="outline">
          حدودي
        </Badge>
        <Badge variant="success" appearance="outline">
          حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="primary" appearance="light">
          فاتح
        </Badge>
        <Badge variant="secondary" appearance="light">
          فاتح
        </Badge>
        <Badge variant="success" appearance="light">
          فاتح
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="primary" appearance="ghost">
          شفاف
        </Badge>
        <Badge variant="secondary" appearance="ghost">
          شفاف
        </Badge>
        <Badge variant="success" appearance="ghost">
          شفاف
        </Badge>
      </div>
    </div>
  );
}

