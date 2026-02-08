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
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
]

export function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$")

  return (
    <DirectionProvider dir="ltr">
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
            <Button aria-label="Send" size="icon" variant="secondary">
              <ArrowRightIcon />
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}
