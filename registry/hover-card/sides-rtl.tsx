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

const SIDE_LABELS: Record<string, string> = {
  left: "يسار",
  top: "أعلى",
  bottom: "أسفل",
  right: "يمين",
}

const SIDE_DESCRIPTIONS: Record<string, string> = {
  left: "يظهر بطاقة التحويم هذه على الجانب الأيسر من المشغل.",
  top: "يظهر بطاقة التحويم هذه في الأعلى من المشغل.",
  bottom: "يظهر بطاقة التحويم هذه في الأسفل من المشغل.",
  right: "يظهر بطاقة التحويم هذه على الجانب الأيمن من المشغل.",
}

export function HoverCardSides() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {HOVER_CARD_SIDES.map((side) => (
            <HoverCard key={side} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Button variant="outline" className="capitalize">
                  {SIDE_LABELS[side]}
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side={side}>
                <div className="flex flex-col gap-1">
                  <h4 className="font-medium">بطاقة التحويم</h4>
                  <p>{SIDE_DESCRIPTIONS[side]}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </DirectionProvider>
  )
}
