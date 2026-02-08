"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@soar-design/soar-react-components"

const HOVER_CARD_SIDES = ["left", "top", "bottom", "right"] as const

export function HoverCardSides() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {HOVER_CARD_SIDES.map((side) => (
            <HoverCard key={side} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Button variant="secondary" className="capitalize">
                  {side}
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side={side}>
                <div className="flex flex-col gap-1">
                  <h4 className="font-medium">Hover Card</h4>
                  <p>This hover card appears on the {side} side of the trigger.</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </DirectionProvider>
  )
}
