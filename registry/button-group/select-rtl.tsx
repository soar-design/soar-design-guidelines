"use client"

import * as React from "react"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import { ButtonGroup } from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@soar-design/soar-react-components"

const CURRENCIES = [
  {
    value: "$",
    label: "الدولار الأمريكي",
  },
  {
    value: "€",
    label: "يورو",
  },
  {
    value: "£",
    label: "الجنيه الإسترليني",
  },
]

export function ButtonGroupSelectRTL() {
  const [currency, setCurrency] = React.useState("$")

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="font-mono">{currency}</SelectTrigger>
          <SelectContent className="min-w-24">
            {CURRENCIES.map((currency) => (
              <SelectItem key={currency.value} value={currency.value}>
                {currency.value}{" "}
                <span className="text-muted-foreground">{currency.label}</span>
              </SelectItem>
            ))}
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
  )
}
