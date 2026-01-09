import { ArrowUpIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@soar-design/soar-react-components"
import { Spinner } from "@soar-design/soar-react-components"

export function SpinnerInputGroupDocsRTL() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4" dir="rtl">
      <InputGroup>
        <InputGroupInput placeholder="أرسل رسالة..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="أرسل رسالة..." disabled />
        <InputGroupAddon align="block-end">
          <Spinner /> جارٍ التحقق...
          <InputGroupButton className="ml-auto" variant="default">
            <ArrowUpIcon />
            <span className="sr-only">إرسال</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

