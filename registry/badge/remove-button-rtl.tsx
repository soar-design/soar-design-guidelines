import { Badge, BadgeButton } from "@soar-design/soar-react-components";
import { X } from "lucide-react";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <Badge variant="secondary" appearance="ghost">
          شفاف
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="secondary">
          صلب
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="secondary" appearance="light">
          فاتح
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="outline">
          حدودي
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="primary" appearance="ghost">
          شفاف
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="primary">
          صلب
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="primary" appearance="light">
          فاتح
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="primary" appearance="outline">
          حدودي
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="success" appearance="ghost">
          شفاف
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="success">
          صلب
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="success" appearance="light">
          فاتح
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="success" appearance="outline">
          حدودي
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="info" appearance="ghost">
          شفاف
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="info">
          صلب
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="info" appearance="light">
          فاتح
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="info" appearance="outline">
          حدودي
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="warning" appearance="ghost">
          شفاف
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="warning">
          صلب
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="warning" appearance="light">
          فاتح
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="warning" appearance="outline">
          حدودي
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="destructive" appearance="ghost">
          شفاف
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="destructive">
          صلب
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="destructive" appearance="light">
          فاتح
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
        <Badge variant="destructive" appearance="outline">
          حدودي
          <BadgeButton>
            <X />
          </BadgeButton>
        </Badge>
      </div>
    </div>
  );
}

