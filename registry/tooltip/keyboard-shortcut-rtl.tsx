"use client"

import {
  Button,
  DirectionProvider,
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components"
import { SaveIcon } from "lucide-react"

export function TooltipKeyboard() {
  return (
    <DirectionProvider dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon-sm">
            <SaveIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="pr-1.5">
          <div className="flex items-center gap-2">
            حفظ التغييرات <Kbd>S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </DirectionProvider>
  )
}
