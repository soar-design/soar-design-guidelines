import { Button } from "@soar-design/soar-react-components";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components";

export function TooltipDemoDocs() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
