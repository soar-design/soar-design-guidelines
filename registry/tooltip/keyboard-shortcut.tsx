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
    <DirectionProvider dir="ltr">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" size="icon-sm">
            <SaveIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="pr-1.5">
          <div className="flex items-center gap-2">
            Save Changes <Kbd>S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </DirectionProvider>
  )
}
