"use client"

import * as React from "react"
import {
  Button,
  Calendar,
  DirectionProvider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!date}
              className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal"
            >
              {date ? format(date, "PPP") : <span>اختر تاريخاً</span>}
              <ChevronDownIcon />
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
      </div>
    </DirectionProvider>
  )
}
