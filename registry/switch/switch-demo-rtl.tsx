import { Label } from "@soar-design/soar-react-components";
import { Switch } from "@soar-design/soar-react-components";

export function SwitchDemoDocsRTL() {
  return (
    <div className="flex items-center space-x-2" dir="rtl">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">وضع الطيران</Label>
    </div>
  );
}
