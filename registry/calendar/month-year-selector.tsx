"use client"

import * as React from "react"
import {
  Calendar,
  CalendarDayButton,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { type DayButton } from "react-day-picker"

function ConsistentDayButton({
  day,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const formattedDate = day.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <CalendarDayButton
      day={day}
      {...props}
      data-day={formattedDate}
    />
  )
}

export function CalendarCaption() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Calendar
          mode="single"
          captionLayout="dropdown"
          className="rounded-3xl border"
          components={{
            DayButton: ConsistentDayButton,
          }}
        />
      </div>
    </DirectionProvider>
  )
}
