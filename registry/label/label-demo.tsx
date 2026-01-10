import { Checkbox } from "@soar-design/soar-react-components";
import { Label } from "@soar-design/soar-react-components";

export function LabelDemoDocs() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
