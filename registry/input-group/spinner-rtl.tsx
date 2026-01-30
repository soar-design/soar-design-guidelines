"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Spinner,
} from "@soar-design/soar-react-components"
import { LoaderIcon } from "lucide-react"

export function InputGroupSpinner() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-sm gap-4">
          <InputGroup>
            <InputGroupInput placeholder="جاري البحث..." />
            <InputGroupAddon align="inline-end">
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="جاري المعالجة..." />
            <InputGroupAddon>
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="جاري حفظ التغييرات..." />
            <InputGroupAddon align="inline-end">
              <InputGroupText>جاري الحفظ...</InputGroupText>
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="جاري تحديث البيانات..." />
            <InputGroupAddon>
              <LoaderIcon className="animate-spin" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupText className="text-muted-foreground">
                يرجى الانتظار...
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}
