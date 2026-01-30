"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@soar-design/soar-react-components"

export function InputOTPDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </DirectionProvider>
  )
}
