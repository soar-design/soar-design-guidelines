"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@soar-design/soar-react-components"

export function HoverCardDemoRTL() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              إطار عمل React – تم إنشاؤه وصيانته بواسطة @vercel.
            </p>
            <div className="text-muted-foreground text-xs">
              انضم في ديسمبر 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
