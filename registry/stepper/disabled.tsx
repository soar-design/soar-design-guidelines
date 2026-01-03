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
    <Stepper defaultValue={1}>
      <StepperNav>
        <StepperItem step={1}>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <StepperTitle>Step 1</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2} disabled>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <StepperTitle>Step 2 (Locked)</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3} disabled>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <StepperTitle>Step 3 (Locked)</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">Active Step</h3>
            <p className="text-sm text-muted-foreground">
              Complete this step to unlock the next ones.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">Step 2 is currently locked.</p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">Step 3 is currently locked.</p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

