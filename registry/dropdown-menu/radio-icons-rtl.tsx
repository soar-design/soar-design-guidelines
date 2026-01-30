"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"
import { Building2Icon, CreditCardIcon, WalletIcon } from "lucide-react"

export function DropdownMenuRadioIcons() {
  const [paymentMethod, setPaymentMethod] = React.useState("card")

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">طريقة الدفع</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-72">
            <DropdownMenuGroup>
              <DropdownMenuLabel>اختر طريقة الدفع</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
              >
                <DropdownMenuRadioItem value="card">
                  <CreditCardIcon />
                  بطاقة ائتمانية
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="paypal">
                  <WalletIcon />
                  PayPal
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bank">
                  <Building2Icon />
                  تحويل بنكي
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DirectionProvider>
  )
}
