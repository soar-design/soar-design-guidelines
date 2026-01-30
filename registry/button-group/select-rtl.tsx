"use client"

import * as React from "react"
import {
  Button,
  ButtonGroup,
  DirectionProvider,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@soar-design/soar-react-components"
import { ArrowRightIcon } from "lucide-react"

const CURRENCIES = [
  {
    value: "$",
    label: "الدولار الأمريكي",
  },
  {
    value: "€",
    label: "اليورو",
  },
  {
    value: "£",
    label: "الجنيه الإسترليني",
  },
]

export function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$")

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <ButtonGroup>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="font-mono">{currency}</SelectTrigger>
              <SelectContent className="min-w-24">
                <SelectGroup>
                  {CURRENCIES.map((currency) => (
                    <SelectItem key={currency.value} value={currency.value}>
                      {currency.value}{" "}
                      <span className="text-muted-foreground">
                        {currency.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input placeholder="10.00" pattern="[0-9]*" />
          </ButtonGroup>
          <ButtonGroup>
            <Button aria-label="إرسال" size="icon" variant="outline">
              <ArrowRightIcon />
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}
