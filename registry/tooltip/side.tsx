import { Button } from "@soar-design/soar-react-components";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@soar-design/soar-react-components";
import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";

export default function TooltipSide() {
  return (
    <div className="flex items-center justify-center gap-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <MoveLeft />
              Left
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Get detailed information about this feature.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <MoveUp />
              Top
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Get detailed information about this feature.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <MoveRight />
              Right
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Get detailed information about this feature.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <MoveDown />
              Bottom
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Get detailed information about this feature.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

