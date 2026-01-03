import { useId } from "react";
import { Label } from "@soar-design/soar-react-components";
import { Switch } from "@soar-design/soar-react-components";

export default function SwitchDemo() {
  const id = useId();

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse" dir="rtl">
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 has-data-[state=checked]:border-primary">
        <Switch id={id} size="sm" className="order-1" aria-describedby={`${id}-description`} />
        <div className="grid grow gap-2">
          <Label htmlFor={id}>تفعيل الإشعارات</Label>
          <p id={`${id}-description`} className="text-xs text-muted-foreground">
            وصف قصير يظهر هنا.
          </p>
        </div>
      </div>
    </div>
  );
}

