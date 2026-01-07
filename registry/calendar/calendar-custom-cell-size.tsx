"use client"

import * as React from "react"

import { Calendar } from "@soar-design/soar-react-components"
import { CalendarDayButton } from "./calendar-day-button"

export function CalendarCustomCellSize() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
      buttonVariant="ghost"
      components={{
        DayButton: CalendarDayButton,
      }}
    />
  )
}

