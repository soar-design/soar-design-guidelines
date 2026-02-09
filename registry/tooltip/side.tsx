"use client"

import {
  Button,
  DirectionProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components"

export function TooltipSides() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex flex-wrap gap-2">
        {(["left", "top", "bottom", "right"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="secondary" className="w-fit capitalize">
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </DirectionProvider>
  )
}
