import { Separator } from "@soar-design/soar-react-components";

export default function SeparatorWithText() {
  return (
    <div className="space-y-6" dir="rtl">
      <div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              أو تابع مع
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background px-4 font-medium">خيارات</span>
          </div>
        </div>
      </div>
    </div>
  );
}

