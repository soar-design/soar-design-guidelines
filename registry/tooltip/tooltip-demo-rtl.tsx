import { Button } from "@soar-design/soar-react-components";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components";

export function TooltipDemoDocsRTL() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">مرر</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>إضافة إلى المكتبة</p>
      </TooltipContent>
    </Tooltip>
  );
}
