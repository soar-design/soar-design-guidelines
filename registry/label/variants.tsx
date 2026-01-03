import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelVariants() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="primary" variant="primary">
          Primary Label
        </Label>
        <Input id="primary" placeholder="With primary variant" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="secondary" variant="secondary">
          Secondary Label
        </Label>
        <Input id="secondary" placeholder="With secondary variant" />
      </div>
    </div>
  );
}
