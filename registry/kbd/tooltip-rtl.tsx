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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex flex-wrap gap-4">
          <ButtonGroup>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">حفظ</Button>
              </TooltipTrigger>
              <TooltipContent className="pr-1.5">
                <div className="flex items-center gap-2">
                  حفظ التغييرات <Kbd>S</Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">طباعة</Button>
              </TooltipTrigger>
              <TooltipContent className="pr-1.5">
                <div className="flex items-center gap-2">
                  طباعة المستند{" "}
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
