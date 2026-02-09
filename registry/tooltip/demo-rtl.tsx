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
    <DirectionProvider dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">مرر</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>أضف إلى المكتبة</p>
        </TooltipContent>
      </Tooltip>
    </DirectionProvider>
  )
}
