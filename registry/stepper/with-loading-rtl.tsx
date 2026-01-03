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
import { Loader2 } from "lucide-react";

export default function StepperWithLoading() {
  return (
    <Stepper
      defaultValue={2}
      indicators={{
        loading: <Loader2 className="h-3 w-3 animate-spin" />,
      }}
      dir="rtl"
    >
      <StepperNav>
        <StepperItem step={1} completed>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <StepperTitle>الرفع</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2} loading>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>المعالجة</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <StepperTitle>التنزيل</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">اكتمل الرفع</h3>
            <p className="text-sm text-muted-foreground">
              تم رفع ملفاتك بنجاح.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <div className="flex items-center gap-3 mb-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <h3 className="font-semibold">جاري المعالجة...</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              يرجى الانتظار بينما نقوم بمعالجة ملفاتك.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">جاهز للتنزيل</h3>
            <p className="text-sm text-muted-foreground">
              ملفاتك المعالجة جاهزة.
            </p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

