"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@soar-design/soar-react-components"

export function HoverCardDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <HoverCard openDelay={10} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="link">Hover Here</Button>
          </HoverCardTrigger>
          <HoverCardContent className="flex w-64 flex-col gap-0.5">
            <div className="font-semibold">@nextjs</div>
            <div>The React Framework – created and maintained by @vercel.</div>
            <div className="text-muted-foreground mt-1 text-xs">
              Joined December 2021
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </DirectionProvider>
  )
}
