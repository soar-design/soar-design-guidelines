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
import { format } from "date-fns"

export function DatePickerBasic() {
  const [date, setDate] = React.useState<Date>()

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-44">
          <FieldLabel htmlFor="date-picker-basic-rtl">التاريخ</FieldLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="secondary"
                id="date-picker-basic-rtl"
                className="justify-start font-normal"
              >
                {date ? format(date, "PPP") : <span>اختر تاريخاً</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                defaultMonth={date}
              />
            </PopoverContent>
          </Popover>
        </Field>
      </div>
    </DirectionProvider>
  )
}
