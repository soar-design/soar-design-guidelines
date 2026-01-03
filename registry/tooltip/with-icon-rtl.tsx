import { Tooltip, TooltipContent, TooltipTrigger } from "@soar-design/soar-react-components";
import { Info } from "lucide-react";

export default function TooltipWithIcon() {
  return (
    <div dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center justify-center rounded-full hover:bg-accent h-6 w-6">
            <Info className="h-4 w-4" />
            <span className="sr-only">معلومات إضافية</span>
          </button>
        </TooltipTrigger>
        <TooltipContent dir="rtl">
          <p>هذه معلومات إضافية حول الميزة</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

