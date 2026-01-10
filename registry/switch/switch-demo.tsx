import { Label } from "@soar-design/soar-react-components";
import { Switch } from "@soar-design/soar-react-components";

export function SwitchDemoDocs() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
