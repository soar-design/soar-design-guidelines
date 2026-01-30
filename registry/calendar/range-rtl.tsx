"use client"

import * as React from "react"
import {
  Calendar,
  CalendarDayButton,
  Card,
  CardContent,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"
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

export function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  })

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card className="mx-auto w-fit p-0">
          <CardContent className="p-0">
            <Calendar
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
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
