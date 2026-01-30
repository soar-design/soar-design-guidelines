"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@soar-design/soar-react-components"
import TextareaAutosize from "react-textarea-autosize"

export function InputGroupCustomInput() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-sm gap-6">
          <InputGroup>
            <TextareaAutosize
              data-slot="input-group-control"
              className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
              placeholder="منطقة نص ذات تغيير تلقائي للحجم..."
            />
            <InputGroupAddon align="block-end">
              <InputGroupButton className="ml-auto" size="sm" variant="default">
                إرسال
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}
