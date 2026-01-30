"use client"

import * as React from "react"
import {
  Button,
  Calendar,
  DirectionProvider,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

export function DatePickerTime() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldGroup className="max-w-xs flex-row">
          <Field>
            <FieldLabel htmlFor="date-picker-time">Date</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker-time"
                  className="w-32 justify-between font-normal"
                >
                  {date ? format(date, "PPP") : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  defaultMonth={date}
                  onSelect={(date) => {
                    setDate(date)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </Field>
          <Field className="w-32">
            <FieldLabel htmlFor="time-picker-time">Time</FieldLabel>
            <Input
              type="time"
              id="time-picker-time"
              step="1"
              defaultValue="10:30:00"
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}
