"use client"

import * as React from "react"
import {
  Calendar,
  CalendarDayButton,
  Card,
  CardContent,
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

export function CalendarWeekNumbers() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  )

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card className="mx-auto w-fit p-0">
          <CardContent className="p-0">
            <Calendar
              mode="single"
              defaultMonth={date}
              selected={date}
              onSelect={setDate}
              showWeekNumber
              components={{
                DayButton: ConsistentDayButton,
              }}
            />
          </CardContent>
        </Card>
      </div>
    </DirectionProvider>
  )
}
