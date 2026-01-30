"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@soar-design/soar-react-components"

export function InputOTPControlled() {
  const [value, setValue] = React.useState("")

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="space-y-2">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-center text-sm">
            {value === "" ? (
              <>أدخل كلمة المرور لمرة واحدة.</>
            ) : (
              <>لقد أدخلت: {value}</>
            )}
          </div>
        </div>
      </div>
    </DirectionProvider>
  )
}
