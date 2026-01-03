import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@soar-design/soar-react-components";

export default function TooltipRichContent() {
  return (
    <div dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">مرر للتفاصيل</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs" dir="rtl">
          <div className="space-y-1">
            <p className="font-semibold">ميزة احترافية</p>
            <p className="text-xs opacity-90">
              هذه الميزة متاحة للمستخدمين الاحترافيين. قم بالترقية لفتح الوظائف المتقدمة.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

