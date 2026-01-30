"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@soar-design/soar-react-components"
import { REGEXP_ONLY_DIGITS } from "input-otp"

export function InputOTPPattern() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-fit">
          <FieldLabel htmlFor="digits-only">Digits Only</FieldLabel>
          <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Field>
      </div>
    </DirectionProvider>
  )
}
