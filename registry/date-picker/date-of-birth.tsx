"use client"

import * as React from "react"
import {
  Button,
  Calendar,
  DirectionProvider,
  Field,
  FieldLabel,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components"

export function DatePickerDateOfBirth() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-44">
          <FieldLabel htmlFor="date-of-birth">Date of birth</FieldLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="secondary"
                id="date-of-birth"
                className="justify-start font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                defaultMonth={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date)
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </Field>
      </div>
    </DirectionProvider>
  )
}
