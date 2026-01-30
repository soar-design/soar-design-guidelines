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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <HoverCard openDelay={10} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="link">مرر هنا</Button>
          </HoverCardTrigger>
          <HoverCardContent className="flex w-64 flex-col gap-0.5">
            <div className="font-semibold">@nextjs</div>
            <div>إطار عمل React – تم إنشاؤه وصيانته بواسطة @vercel.</div>
            <div className="text-muted-foreground mt-1 text-xs">
              انضم في ديسمبر 2021
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </DirectionProvider>
  )
}
