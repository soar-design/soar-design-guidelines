"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@soar-design/soar-react-components"
import { REGEXP_ONLY_DIGITS } from "input-otp"

export function InputOTPFourDigits() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </DirectionProvider>
  )
}
