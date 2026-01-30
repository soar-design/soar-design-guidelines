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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Payment Method</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-72">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
              >
                <DropdownMenuRadioItem value="card">
                  <CreditCardIcon />
                  Credit Card
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="paypal">
                  <WalletIcon />
                  PayPal
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bank">
                  <Building2Icon />
                  Bank Transfer
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DirectionProvider>
  )
}
