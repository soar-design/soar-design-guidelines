"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import { ButtonGroup } from "@soar-design/soar-react-components"

export function ButtonGroupNestedRTL() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          4
        </Button>
        <Button variant="outline" size="sm">
          5
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="السابق">
          <ArrowLeftIcon />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="التالي">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
