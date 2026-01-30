"use client"

import * as React from "react"
import {
  DirectionProvider,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
} from "@soar-design/soar-react-components"
import { SearchIcon } from "lucide-react"

export function EmptyInputGroup() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-md mx-auto">
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
                <SearchIcon />
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
      </div>
    </DirectionProvider>
  )
}
