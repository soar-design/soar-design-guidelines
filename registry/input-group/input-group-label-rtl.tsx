"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"

export function InputGroupLabelRTL() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div className="space-y-2">
        <Label htmlFor="username-input-rtl">اسم المستخدم</Label>
        <InputGroup>
          <InputGroupInput id="username-input-rtl" placeholder="أدخل اسم المستخدم" />
          <InputGroupAddon align="inline-end">
            <Label className="text-muted-foreground text-xs">@company.com</Label>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="price-input-rtl">السعر</Label>
        <InputGroup>
          <InputGroupAddon>
            <Label className="text-muted-foreground text-xs">$</Label>
          </InputGroupAddon>
          <InputGroupInput id="price-input-rtl" placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <Label className="text-muted-foreground text-xs">دولار</Label>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <InputGroup>
        <InputGroupInput placeholder="بحث..." />
        <InputGroupAddon align="inline-end">
          <Label className="text-muted-foreground text-xs">12 نتيجة</Label>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
