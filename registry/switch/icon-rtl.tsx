import { useId } from "react";
import { Label } from "@soar-design/soar-react-components";
import { Switch, SwitchIndicator, SwitchWrapper } from "@soar-design/soar-react-components";
import { Moon, Sun } from "lucide-react";

export default function SwitchDemo() {
  const id = useId();
  const id2 = useId();

  return (
    <div className="flex flex-col gap-8" dir="rtl">
      <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
        <SwitchWrapper>
          <Switch id={id} size="xl" />
          <SwitchIndicator state="on">
            <Sun className="size-4 text-primary-foreground" />
          </SwitchIndicator>
          <SwitchIndicator state="off">
            <Moon className="size-4 text-muted-foreground" />
          </SwitchIndicator>
        </SwitchWrapper>
        <Label htmlFor={id}>مؤشر أيقونة</Label>
      </div>
      <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
        <SwitchWrapper permanent={true}>
          <Switch id={id2} size="xl" />
          <SwitchIndicator state="on">
            <Sun className="size-4 text-muted-foreground" />
          </SwitchIndicator>
          <SwitchIndicator state="off">
            <Moon className="size-4 text-muted-foreground" />
          </SwitchIndicator>
        </SwitchWrapper>
        <Label htmlFor={id2}>مؤشر دائم</Label>
      </div>
    </div>
  );
}

