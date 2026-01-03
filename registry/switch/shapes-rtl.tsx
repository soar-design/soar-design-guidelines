import { Label } from "@soar-design/soar-react-components";
import { Switch } from "@soar-design/soar-react-components";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse" dir="rtl">
      <Switch id="square-mode" shape="square" />
      <Label htmlFor="square-mode">مربع</Label>
    </div>
  );
}

