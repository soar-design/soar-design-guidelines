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
import { CalendarIcon } from "lucide-react"

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("ar-SA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}

export function DatePickerInput() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
  )
  const [month, setMonth] = React.useState<Date | undefined>(date)
  const [value, setValue] = React.useState(formatDate(date))

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-48">
          <FieldLabel htmlFor="date-input-rtl">تاريخ الاشتراك</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="date-input-rtl"
              value={value}
              placeholder="يونيو 01، 2025"
              onChange={(e) => {
                const date = new Date(e.target.value)
                setValue(e.target.value)
                if (isValidDate(date)) {
                  setDate(date)
                  setMonth(date)
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
                    id="date-picker-input-rtl"
                    variant="ghost"
                    size="icon-xs"
                    aria-label="اختر التاريخ"
                  >
                    <CalendarIcon />
                    <span className="sr-only">اختر التاريخ</span>
                  </InputGroupButton>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    month={month}
                    onMonthChange={setMonth}
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
        </Field>
      </div>
    </DirectionProvider>
  )
}
