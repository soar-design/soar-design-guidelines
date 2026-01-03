import { Badge, BadgeDot } from "@soar-design/soar-react-components";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <Badge appearance="ghost">
          <BadgeDot /> شفاف
        </Badge>
        <Badge>
          <BadgeDot /> افتراضي
        </Badge>
        <Badge appearance="light">
          <BadgeDot /> فاتح
        </Badge>
        <Badge appearance="outline">
          <BadgeDot /> حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="success" appearance="ghost">
          <BadgeDot /> شفاف
        </Badge>
        <Badge variant="success">
          <BadgeDot /> افتراضي
        </Badge>
        <Badge variant="success" appearance="light">
          <BadgeDot /> فاتح
        </Badge>
        <Badge variant="success" appearance="outline">
          <BadgeDot /> حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="info" appearance="ghost">
          <BadgeDot /> شفاف
        </Badge>
        <Badge variant="info">
          <BadgeDot /> افتراضي
        </Badge>
        <Badge variant="info" appearance="light">
          <BadgeDot /> فاتح
        </Badge>
        <Badge variant="info" appearance="outline">
          <BadgeDot /> حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="warning" appearance="ghost">
          <BadgeDot /> شفاف
        </Badge>
        <Badge variant="warning">
          <BadgeDot /> افتراضي
        </Badge>
        <Badge variant="warning" appearance="light">
          <BadgeDot /> فاتح
        </Badge>
        <Badge variant="warning" appearance="outline">
          <BadgeDot /> حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="destructive" appearance="ghost">
          <BadgeDot /> شفاف
        </Badge>
        <Badge variant="destructive">
          <BadgeDot /> افتراضي
        </Badge>
        <Badge variant="destructive" appearance="light">
          <BadgeDot /> فاتح
        </Badge>
        <Badge variant="destructive" appearance="outline">
          <BadgeDot /> حدودي
        </Badge>
      </div>
    </div>
  );
}

