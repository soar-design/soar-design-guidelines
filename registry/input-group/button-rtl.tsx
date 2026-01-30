"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components"
import { CheckIcon, CopyIcon, InfoIcon, StarIcon } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export function InputGroupButtonExample() {
  const { copy, copied } = useCopyToClipboard()
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                aria-label="Copy"
                title="Copy"
                size="icon-xs"
                onClick={() => {
                  copy("https://x.com/shadcn")
                }}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup className="[--radius:9999px]">
            <Popover>
              <PopoverTrigger asChild>
                <InputGroupAddon>
                  <InputGroupButton variant="secondary" size="icon-xs">
                    <InfoIcon />
                  </InputGroupButton>
                </InputGroupAddon>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="flex flex-col gap-1 rounded-xl text-sm"
              >
                <p className="font-medium">اتصالك غير آمن.</p>
                <p>لا يجب عليك إدخال أي معلومات حساسة على هذا الموقع.</p>
              </PopoverContent>
            </Popover>
            <InputGroupAddon className="text-muted-foreground pl-1.5">
              https://
            </InputGroupAddon>
            <InputGroupInput id="input-secure-19" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={() => setIsFavorite(!isFavorite)}
                size="icon-xs"
              >
                <StarIcon
                  data-favorite={isFavorite}
                  className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
                />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="اكتب للبحث..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="secondary">بحث</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}
