import { Button } from "@soar-design/soar-react-components";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@soar-design/soar-react-components";
import { Info } from "lucide-react";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Info className="h-4 w-4" />
            Default tooltip
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get detailed information about this feature.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
