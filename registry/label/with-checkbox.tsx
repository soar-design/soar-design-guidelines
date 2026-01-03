import { Label, Checkbox } from "@soar-design/soar-react-components";

export default function LabelWithCheckbox() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="cursor-pointer">
          Accept terms and conditions
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing" className="cursor-pointer">
          Send me marketing emails
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label
          htmlFor="newsletter"
          className="cursor-pointer flex flex-col gap-1"
        >
          <span>Subscribe to newsletter</span>
          <span className="text-xs font-normal text-muted-foreground">
            Get weekly updates about new features
          </span>
        </Label>
      </div>
    </div>
  );
}
