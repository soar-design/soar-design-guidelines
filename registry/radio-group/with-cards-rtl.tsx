import { Label, RadioGroup, RadioGroupItem } from "@soar-design/soar-react-components";

export default function RadioGroupWithCards() {
  return (
    <RadioGroup defaultValue="starter" className="gap-4" dir="rtl">
      <div className="flex items-center space-x-3 rtl:space-x-reverse rounded-lg border border-input p-4 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
        <RadioGroupItem value="starter" id="starter" />
        <div className="flex-1">
          <Label htmlFor="starter" className="font-medium cursor-pointer">
            البداية
          </Label>
          <p className="text-sm text-muted-foreground">9 دولار/شهر</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 rtl:space-x-reverse rounded-lg border border-input p-4 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
        <RadioGroupItem value="professional" id="professional" />
        <div className="flex-1">
          <Label htmlFor="professional" className="font-medium cursor-pointer">
            احترافي
          </Label>
          <p className="text-sm text-muted-foreground">29 دولار/شهر</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 rtl:space-x-reverse rounded-lg border border-input p-4 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
        <RadioGroupItem value="business" id="business" />
        <div className="flex-1">
          <Label htmlFor="business" className="font-medium cursor-pointer">
            الأعمال
          </Label>
          <p className="text-sm text-muted-foreground">99 دولار/شهر</p>
        </div>
      </div>
    </RadioGroup>
  );
}

