"use client";

import {
  Stepper,
  StepperNav,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
} from "@soar-design/soar-react-components";

export default function StepperSimple() {
  return (
    <Stepper defaultValue={2} dir="rtl">
      <StepperNav>
        <StepperItem step={1} completed>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>
    </Stepper>
  );
}

