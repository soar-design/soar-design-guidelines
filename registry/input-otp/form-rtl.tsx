"use client"

import * as React from "react"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@soar-design/soar-react-components"
import { RefreshCwIcon } from "lucide-react"

export function InputOTPForm() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>تحقق من تسجيل الدخول</CardTitle>
            <CardDescription>
              أدخل رمز التحقق الذي أرسلناه إلى عنوان بريدك الإلكتروني:{" "}
              <span className="font-medium">m@example.com</span>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="otp-verification">
                  رمز التحقق
                </FieldLabel>
                <Button variant="outline" size="xs">
                  <RefreshCwIcon />
                  إعادة إرسال الرمز
                </Button>
              </div>
              <InputOTP maxLength={6} id="otp-verification" required>
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator className="mx-2" />
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription>
                <a href="#">لم أعد أتمكن من الوصول إلى عنوان البريد الإلكتروني هذا.</a>
              </FieldDescription>
            </Field>
          </CardContent>
          <CardFooter>
            <Field>
              <Button type="submit" className="w-full">
                تحقق
              </Button>
              <div className="text-muted-foreground text-sm">
                تواجه مشكلة في تسجيل الدخول؟{" "}
                <a
                  href="#"
                  className="hover:text-primary underline underline-offset-4 transition-colors"
                >
                  اتصل بالدعم
                </a>
              </div>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </DirectionProvider>
  )
}
