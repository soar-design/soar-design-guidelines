import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@soar-design/soar-react-components";

export default function TooltipRichContent() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-1">
          <p className="font-semibold">Pro Feature</p>
          <p className="text-xs opacity-90">
            This feature is available for Pro users. Upgrade to unlock advanced functionality.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
