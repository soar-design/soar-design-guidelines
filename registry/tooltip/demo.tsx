"use client"

import {
  Button,
  DirectionProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components"

export function TooltipDemo() {
  return (
    <DirectionProvider dir="ltr">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </DirectionProvider>
  )
}
