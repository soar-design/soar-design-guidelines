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

export function CalendarBookedDates() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  )
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 1, 12 + i)
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
              disabled={bookedDates}
              modifiers={{
                booked: bookedDates,
              }}
              modifiersClassNames={{
                booked: "[&>button]:line-through opacity-100",
              }}
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
