import { Label, RadioGroup, RadioGroupItem } from "@soar-design/soar-react-components";

export default function RadioGroupWithCards() {
  return (
    <RadioGroup defaultValue="starter" className="gap-4">
      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
        <RadioGroupItem value="starter" id="starter" />
        <div className="flex-1">
          <Label htmlFor="starter" className="font-medium cursor-pointer">
            Starter
          </Label>
          <p className="text-sm text-muted-foreground">$9/month</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
        <RadioGroupItem value="professional" id="professional" />
        <div className="flex-1">
          <Label htmlFor="professional" className="font-medium cursor-pointer">
            Professional
          </Label>
          <p className="text-sm text-muted-foreground">$29/month</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 rounded-lg border border-input p-4 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
        <RadioGroupItem value="business" id="business" />
        <div className="flex-1">
          <Label htmlFor="business" className="font-medium cursor-pointer">
            Business
          </Label>
          <p className="text-sm text-muted-foreground">$99/month</p>
        </div>
      </div>
    </RadioGroup>
  );
}

