"use client"

import * as React from "react"
import {
  Calendar,
  DirectionProvider,
  Field,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components"
import { parseDate } from "chrono-node"
import { CalendarIcon } from "lucide-react"

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function DatePickerNaturalLanguage() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("In 2 days")
  const [date, setDate] = React.useState<Date | undefined>(
    parseDate(value) || undefined
  )

  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="max-w-xs">
          <FieldLabel htmlFor="date-natural-language">Schedule Date</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="date-natural-language"
              value={value}
              placeholder="Tomorrow or next week"
              onChange={(e) => {
                setValue(e.target.value)
                const date = parseDate(e.target.value)
                if (date) {
                  setDate(date)
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault()
                  setOpen(true)
                }
              }}
            />
            <InputGroupAddon align="inline-end">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <InputGroupButton
                    id="date-picker-natural-language"
                    variant="ghost"
                    size="icon-xs"
                    aria-label="Select date"
                  >
                    <CalendarIcon />
                    <span className="sr-only">Select date</span>
                  </InputGroupButton>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  sideOffset={8}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    defaultMonth={date}
                    onSelect={(date) => {
                      setDate(date)
                      setValue(formatDate(date))
                      setOpen(false)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </InputGroupAddon>
          </InputGroup>
          <div className="text-muted-foreground px-1 text-sm">
            Your post will be published on{" "}
            <span className="font-medium">{formatDate(date)}</span>.
          </div>
        </Field>
      </div>
    </DirectionProvider>
  )
}
