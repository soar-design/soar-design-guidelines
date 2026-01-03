import { Separator } from "@soar-design/soar-react-components";

export default function SeparatorCustomStyle() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="space-y-2">
        <p className="text-sm font-medium">فاصل افتراضي</p>
        <Separator />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">فاصل أكثر سماكة</p>
        <Separator className="h-0.5" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">فاصل ملون</p>
        <Separator className="bg-primary" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">فاصل متقطع</p>
        <Separator className="border-t border-dashed bg-transparent" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">فاصل منقط</p>
        <Separator className="border-t border-dotted bg-transparent" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">فاصل متدرج</p>
        <Separator className="h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}

