"use client"

import * as React from "react"
import {
  Button,
  ButtonGroup,
  DirectionProvider,
  Kbd,
  KbdGroup,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components"

export function KbdTooltip() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex flex-wrap gap-4">
          <ButtonGroup>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Save</Button>
              </TooltipTrigger>
              <TooltipContent className="pr-1.5">
                <div className="flex items-center gap-2">
                  Save Changes <Kbd>S</Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Print</Button>
              </TooltipTrigger>
              <TooltipContent className="pr-1.5">
                <div className="flex items-center gap-2">
                  Print Document{" "}
                  <KbdGroup>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>P</Kbd>
                  </KbdGroup>
                </div>
              </TooltipContent>
            </Tooltip>
          </ButtonGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}
