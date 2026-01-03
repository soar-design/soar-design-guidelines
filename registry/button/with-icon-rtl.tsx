import { Button } from "@soar-design/soar-react-components";
import { Bell, CalendarCheck, Trash2 } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="primary">
        <Trash2 /> أساسي
      </Button>
      <Button variant="outline">
        <Bell /> حدودي
      </Button>
      <Button variant="ghost">
        <CalendarCheck /> شفاف
      </Button>
    </div>
  );
}
