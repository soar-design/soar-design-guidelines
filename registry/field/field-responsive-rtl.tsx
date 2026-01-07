"use client"

import { Button } from "@soar-design/soar-react-components"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"
import { Textarea } from "@soar-design/soar-react-components"

export function FieldResponsiveDocsRTL() {
  return (
    <div className="w-full max-w-4xl">
      <form>
        <FieldSet>
          <FieldLegend>الملف الشخصي</FieldLegend>
          <FieldDescription>املأ معلومات ملفك الشخصي.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">الاسم</FieldLabel>
                <FieldDescription>
                  قدم اسمك الكامل للتعريف
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="Evil Rabbit" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="lastName">الرسالة</FieldLabel>
                <FieldDescription>
                  يمكنك كتابة رسالتك هنا. اجعلها قصيرة، ويفضل أن تكون أقل من 100 حرف.
                </FieldDescription>
              </FieldContent>
              <Textarea
                id="message"
                placeholder="Hello, world!"
                required
                className="min-h-[100px] resize-none sm:min-w-[300px]"
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <Button type="submit">إرسال</Button>
              <Button type="button" variant="outline">
                إلغاء
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
