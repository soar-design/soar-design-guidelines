"use client";

import { Button } from "@soar-design/soar-react-components";
import { Checkbox } from "@soar-design/soar-react-components";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@soar-design/soar-react-components";
import { Input } from "@soar-design/soar-react-components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";

export function FieldDemoDocsRTL() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>طريقة الدفع</FieldLegend>
            <FieldDescription>جميع المعاملات آمنة ومشفرة</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  الاسم على البطاقة
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  رقم البطاقة
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  أدخل رقم البطاقة المكون من 16 رقمًا
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    الشهر
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    السنة
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>عنوان الفوترة</FieldLegend>
            <FieldDescription>
              عنوان الفوترة المرتبط بطريقة الدفع الخاصة بك
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  نفس عنوان الشحن
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  التعليقات
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="أضف أي تعليقات إضافية"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">إرسال</Button>
            <Button variant="outline" type="button">
              إلغاء
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
