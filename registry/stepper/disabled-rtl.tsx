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

export default function StepperDisabled() {
  return (
    <Stepper defaultValue={1} dir="rtl">
      <StepperNav>
        <StepperItem step={1}>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <StepperTitle>الخطوة 1</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2} disabled>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <StepperTitle>الخطوة 2 (مقفلة)</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3} disabled>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <StepperTitle>الخطوة 3 (مقفلة)</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">الخطوة النشطة</h3>
            <p className="text-sm text-muted-foreground">
              أكمل هذه الخطوة لفتح الخطوات التالية.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">الخطوة 2 مقفلة حاليًا.</p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">الخطوة 3 مقفلة حاليًا.</p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

