"use client"

import * as React from "react"

import { Calendar } from "@soar-design/soar-react-components"
import { CalendarDayButton } from "./calendar-day-button"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
      components={{
        DayButton: CalendarDayButton,
      }}
    />
  )
}
