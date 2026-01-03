import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@soar-design/soar-react-components";

export default function TooltipSides() {
  return (
    <div className="flex gap-4" dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">أعلى</Button>
        </TooltipTrigger>
        <TooltipContent side="top" dir="rtl">
          <p>تلميح علوي</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">يسار</Button>
        </TooltipTrigger>
        <TooltipContent side="left" dir="rtl">
          <p>تلميح يساري</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">أسفل</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" dir="rtl">
          <p>تلميح سفلي</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">يمين</Button>
        </TooltipTrigger>
        <TooltipContent side="right" dir="rtl">
          <p>تلميح يميني</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

