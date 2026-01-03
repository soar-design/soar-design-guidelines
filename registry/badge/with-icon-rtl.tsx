import { Badge } from "@soar-design/soar-react-components";
import { Activity, Mail, Tag } from "lucide-react";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <Badge variant="primary" appearance="ghost">
          <Tag /> شفاف
        </Badge>
        <Badge variant="primary">
          <Mail /> صلب
        </Badge>
        <Badge variant="primary" appearance="light">
          <Activity /> فاتح
        </Badge>
        <Badge variant="primary" appearance="outline">
          <Tag /> حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="success" appearance="ghost">
          <Tag /> شفاف
        </Badge>
        <Badge variant="success">
          <Mail /> صلب
        </Badge>
        <Badge variant="success" appearance="light">
          <Activity /> فاتح
        </Badge>
        <Badge variant="success" appearance="outline">
          <Tag /> حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="info" appearance="ghost">
          <Tag /> شفاف
        </Badge>
        <Badge variant="info">
          <Mail /> صلب
        </Badge>
        <Badge variant="info" appearance="light">
          <Activity /> فاتح
        </Badge>
        <Badge variant="info" appearance="outline">
          <Tag /> حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="warning" appearance="ghost">
          <Tag /> شفاف
        </Badge>
        <Badge variant="warning">
          <Mail /> صلب
        </Badge>
        <Badge variant="warning" appearance="light">
          <Activity /> فاتح
        </Badge>
        <Badge variant="warning" appearance="outline">
          <Tag /> حدودي
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="destructive" appearance="ghost">
          <Tag /> شفاف
        </Badge>
        <Badge variant="destructive">
          <Mail /> صلب
        </Badge>
        <Badge variant="destructive" appearance="light">
          <Activity /> فاتح
        </Badge>
        <Badge variant="destructive" appearance="outline">
          <Tag /> حدودي
        </Badge>
      </div>
    </div>
  );
}

