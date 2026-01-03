import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@soar-design/soar-react-components";

export default function TooltipCustomOffset() {
  return (
    <div dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">مرر علي</Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={10} dir="rtl">
          <p>تلميح بإزاحة 10 بكسل</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

