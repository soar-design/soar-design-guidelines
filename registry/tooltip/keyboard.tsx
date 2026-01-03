import { Kbd, Tooltip, TooltipContent, TooltipTrigger } from "@soar-design/soar-react-components";

export default function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 rounded-md border hover:bg-accent">Copy</button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="flex items-center gap-2">
          <span>Copy</span>
          <div className="flex gap-1">
            <Kbd>⌘</Kbd>
            <Kbd>C</Kbd>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
