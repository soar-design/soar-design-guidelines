import { useId } from "react";
import { Label } from "@soar-design/soar-react-components";
import { Switch, SwitchIndicator, SwitchWrapper } from "@soar-design/soar-react-components";

export default function SwitchDemo() {
  const id = useId();

  return (
    <div className="flex items-center space-x-2.5 rtl:space-x-reverse" dir="rtl">
      <SwitchWrapper>
        <Switch id={id} size="xl" />
        <SwitchIndicator state="off" className="text-[10px] font-medium text-muted-foreground uppercase">
          إيقاف
        </SwitchIndicator>
        <SwitchIndicator state="on" className="text-[10px] font-medium text-primary-foreground uppercase">
          تشغيل
        </SwitchIndicator>
      </SwitchWrapper>
      <Label htmlFor={id}>مؤشر نصي</Label>
    </div>
  );
}

