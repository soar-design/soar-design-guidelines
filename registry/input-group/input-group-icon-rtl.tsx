"use client"

import {
  Check,
  CreditCard,
  Info,
  Mail,
  Search,
  Star,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"

export function InputGroupIconRTL() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="بحث..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="أدخل بريدك الإلكتروني" />
        <InputGroupAddon>
          <Mail />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="رقم البطاقة" />
        <InputGroupAddon>
          <CreditCard />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Check />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="رقم البطاقة" />
        <InputGroupAddon align="inline-end">
          <Star />
          <Info />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
