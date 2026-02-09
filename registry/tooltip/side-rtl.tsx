"use client"

import {
  Button,
  DirectionProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components"

const sideLabels: Record<string, string> = {
  left: "يسار",
  top: "أعلى",
  bottom: "أسفل",
  right: "يمين",
}

export function TooltipSides() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-wrap gap-2">
        {(["left", "top", "bottom", "right"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="secondary" className="w-fit">
                {sideLabels[side]}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>أضف إلى المكتبة</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </DirectionProvider>
  )
}
