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

export function CalendarCustomDays() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  })

  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card className="mx-auto w-fit p-0">
          <CardContent className="p-0">
            <Calendar
              mode="range"
              defaultMonth={range?.from}
              selected={range}
              onSelect={setRange}
              numberOfMonths={1}
              captionLayout="dropdown"
              className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
              formatters={{
                formatMonthDropdown: (date) => {
                  return date.toLocaleString("default", { month: "long" })
                },
              }}
              components={{
                DayButton: ({ children, modifiers, day, ...props }) => {
                  const isWeekend =
                    day.date.getDay() === 0 || day.date.getDay() === 6
                  const formattedDate = day.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })

                  return (
                    <CalendarDayButton
                      day={day}
                      modifiers={modifiers}
                      {...props}
                      data-day={formattedDate}
                    >
                      {children}
                      {!modifiers.outside && (
                        <span>{isWeekend ? "$120" : "$100"}</span>
                      )}
                    </CalendarDayButton>
                  )
                },
              }}
            />
          </CardContent>
        </Card>
      </div>
    </DirectionProvider>
  )
}
