"use client"

import {
  Button,
  DirectionProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components"

export function TooltipDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block w-fit">
            <Button variant="secondary" disabled>
              معطل
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>هذه الميزة غير متاحة حاليًا</p>
        </TooltipContent>
      </Tooltip>
    </DirectionProvider>
  )
}
