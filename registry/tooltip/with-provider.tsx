import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@soar-design/soar-react-components";

export default function TooltipWithProvider() {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delayed tooltip with 300ms</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
