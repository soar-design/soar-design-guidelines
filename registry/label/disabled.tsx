import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelDisabled() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="disabled">Email</Label>
        <Input id="disabled" disabled placeholder="Disabled input" />
      </div>

      <div className="space-y-2 opacity-50">
        <Label htmlFor="disabled-2">Username (Coming Soon)</Label>
        <Input id="disabled-2" disabled placeholder="Feature not available" />
      </div>
    </div>
  );
}
