import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@soar-design/soar-react-components";

export default function TooltipDisabled() {
  return (
    <div dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block">
            <Button disabled>زر معطل</Button>
          </span>
        </TooltipTrigger>
        <TooltipContent dir="rtl">
          <p>هذا الإجراء غير متاح حاليًا</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

