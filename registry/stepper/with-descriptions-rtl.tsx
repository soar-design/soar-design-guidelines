"use client";

import {
  Stepper,
  StepperNav,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
  StepperPanel,
  StepperContent,
} from "@soar-design/soar-react-components";

export default function StepperWithDescriptions() {
  return (
    <Stepper defaultValue={2} dir="rtl">
      <StepperNav>
        <StepperItem step={1} completed>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <div>
              <StepperTitle>المعلومات الشخصية</StepperTitle>
              <StepperDescription>التفاصيل الأساسية</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <div>
              <StepperTitle>العنوان</StepperTitle>
              <StepperDescription>تفاصيل الشحن</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <div>
              <StepperTitle>الدفع</StepperTitle>
              <StepperDescription>معلومات الفوترة</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={4}>
          <StepperTrigger>
            <StepperIndicator>4</StepperIndicator>
            <div>
              <StepperTitle>المراجعة</StepperTitle>
              <StepperDescription>تأكيد الطلب</StepperDescription>
            </div>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">أدخل معلوماتك الشخصية.</p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">قدم عنوان الشحن الخاص بك.</p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">أضف طريقة الدفع الخاصة بك.</p>
          </div>
        </StepperContent>

        <StepperContent value={4}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">راجع طلبك قبل التأكيد.</p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

