"use client"

import { Search } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@soar-design/soar-react-components"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import { Kbd } from "@soar-design/soar-react-components"

export function EmptyInputGroupRTL() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - غير موجود</EmptyTitle>
        <EmptyDescription>
          الصفحة التي تبحث عنها غير موجودة. جرب البحث عما تحتاجه أدناه.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="جرب البحث عن الصفحات..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          تحتاج مساعدة؟ <a href="#">اتصل بالدعم</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
