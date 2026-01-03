import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@soar-design/soar-react-components";

export default function TooltipWithProvider() {
  return (
    <div dir="rtl">
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">مرر علي</Button>
          </TooltipTrigger>
          <TooltipContent dir="rtl">
            <p>تلميح متأخر بـ 300 مللي ثانية</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

