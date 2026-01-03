import { Button } from "@soar-design/soar-react-components";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@soar-design/soar-react-components";
import { Info } from "lucide-react";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" dir="rtl">
            <Info className="h-4 w-4" />
            تلميح افتراضي
          </Button>
        </TooltipTrigger>
        <TooltipContent dir="rtl">
          <p>احصل على معلومات مفصلة حول هذه الميزة.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

