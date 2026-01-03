import { Label, Checkbox } from "@soar-design/soar-react-components";

export default function LabelWithCheckbox() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="cursor-pointer">
          قبول الشروط والأحكام
        </Label>
      </div>

      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing" className="cursor-pointer">
          إرسال رسائل البريد الإلكتروني التسويقية
        </Label>
      </div>

      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Checkbox id="newsletter" />
        <Label
          htmlFor="newsletter"
          className="cursor-pointer flex flex-col gap-1"
        >
          <span>الاشتراك في النشرة الإخبارية</span>
          <span className="text-xs font-normal text-muted-foreground">
            احصل على تحديثات أسبوعية حول الميزات الجديدة
          </span>
        </Label>
      </div>
    </div>
  );
}

