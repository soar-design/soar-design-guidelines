import { Label, RadioGroup, RadioGroupItem } from "@soar-design/soar-react-components";

export default function RadioGroupWithDescriptions() {
  return (
    <RadioGroup defaultValue="free" dir="rtl">
      <div className="flex items-start space-x-3 space-y-0 rtl:space-x-reverse">
        <RadioGroupItem value="free" id="free" className="mt-1" />
        <div className="flex-1 space-y-1">
          <Label htmlFor="free" className="font-medium">
            مجاني
          </Label>
          <p className="text-sm text-muted-foreground">
            مثالي للأفراد والمشاريع الصغيرة.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 space-y-0 rtl:space-x-reverse">
        <RadioGroupItem value="pro" id="pro" className="mt-1" />
        <div className="flex-1 space-y-1">
          <Label htmlFor="pro" className="font-medium">
            احترافي
          </Label>
          <p className="text-sm text-muted-foreground">
            للمحترفين والفرق النامية.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 space-y-0 rtl:space-x-reverse">
        <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
        <div className="flex-1 space-y-1">
          <Label htmlFor="enterprise" className="font-medium">
            المؤسسات
          </Label>
          <p className="text-sm text-muted-foreground">
            ميزات متقدمة للمؤسسات الكبيرة.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}

