"use client"

import * as React from "react"
import {
  Calendar,
  CalendarDayButton,
  Card,
  CardContent,
  CardFooter,
  DirectionProvider,
  Field,
  FieldGroup,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import { Clock2Icon } from "lucide-react"
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

export function CalendarWithTime() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card className="mx-auto w-fit">
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-0"
              components={{
                DayButton: ConsistentDayButton,
              }}
            />
          </CardContent>
          <CardFooter className="bg-card border-t">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="time-from">وقت البدء</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="time-from"
                    type="time"
                    step="1"
                    defaultValue="10:30:00"
                    className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <InputGroupAddon>
                    <Clock2Icon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="time-to">وقت الانتهاء</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="time-to"
                    type="time"
                    step="1"
                    defaultValue="12:30:00"
                    className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <InputGroupAddon>
                    <Clock2Icon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </FieldGroup>
          </CardFooter>
        </Card>
      </div>
    </DirectionProvider>
  )
}
