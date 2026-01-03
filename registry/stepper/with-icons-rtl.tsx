"use client";

import {
  Stepper,
  StepperNav,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperSeparator,
  StepperPanel,
  StepperContent,
} from "@soar-design/soar-react-components";
import { User, MapPin, CreditCard, CheckCircle } from "lucide-react";

export default function StepperWithIcons() {
  return (
    <Stepper
      defaultValue={2}
      indicators={{
        active: <User className="h-3 w-3" />,
        completed: <CheckCircle className="h-3 w-3" />,
        inactive: null,
      }}
      dir="rtl"
    >
      <StepperNav>
        <StepperItem step={1} completed>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>شخصي</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>الموقع</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>الدفع</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={4}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>تم</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <User className="h-4 w-4" />
              المعلومات الشخصية
            </h3>
            <p className="text-sm text-muted-foreground">
              مكتمل: تم حفظ تفاصيلك الشخصية.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              تفاصيل الموقع
            </h3>
            <p className="text-sm text-muted-foreground">
              أدخل عنوانك ومعلومات موقعك.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              طريقة الدفع
            </h3>
            <p className="text-sm text-muted-foreground">
              أضف معلومات الدفع الخاصة بك بشكل آمن.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={4}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              كل شيء جاهز!
            </h3>
            <p className="text-sm text-muted-foreground">
              اكتمل إعدادك.
            </p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

