import { Label, RadioGroup, RadioGroupItem } from "@soar-design/soar-react-components";

export default function RadioGroupWithDescriptions() {
  return (
    <RadioGroup defaultValue="free">
      <div className="flex items-start space-x-3 space-y-0">
        <RadioGroupItem value="free" id="free" className="mt-1" />
        <div className="flex-1 space-y-1">
          <Label htmlFor="free" className="font-medium">
            Free
          </Label>
          <p className="text-sm text-muted-foreground">
            Perfect for individuals and small projects.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 space-y-0">
        <RadioGroupItem value="pro" id="pro" className="mt-1" />
        <div className="flex-1 space-y-1">
          <Label htmlFor="pro" className="font-medium">
            Pro
          </Label>
          <p className="text-sm text-muted-foreground">
            For professionals and growing teams.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 space-y-0">
        <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
        <div className="flex-1 space-y-1">
          <Label htmlFor="enterprise" className="font-medium">
            Enterprise
          </Label>
          <p className="text-sm text-muted-foreground">
            Advanced features for large organizations.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}

