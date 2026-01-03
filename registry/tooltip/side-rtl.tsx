import { Button } from "@soar-design/soar-react-components";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@soar-design/soar-react-components";
import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";

export default function TooltipSide() {
  return (
    <div className="flex items-center justify-center gap-6" dir="rtl">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <MoveRight className="rtl:rotate-180" />
              يمين
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" dir="rtl">
            <p>احصل على معلومات مفصلة حول هذه الميزة.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <MoveUp />
              أعلى
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" dir="rtl">
            <p>احصل على معلومات مفصلة حول هذه الميزة.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <MoveLeft className="rtl:rotate-180" />
              يسار
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" dir="rtl">
            <p>احصل على معلومات مفصلة حول هذه الميزة.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <MoveDown />
              أسفل
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" dir="rtl">
            <p>احصل على معلومات مفصلة حول هذه الميزة.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

