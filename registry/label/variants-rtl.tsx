import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelVariants() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="space-y-2">
        <Label htmlFor="primary" variant="primary">
          تسمية أساسية
        </Label>
        <Input id="primary" placeholder="مع متغير أساسي" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="secondary" variant="secondary">
          تسمية ثانوية
        </Label>
        <Input id="secondary" placeholder="مع متغير ثانوي" />
      </div>
    </div>
  );
}

