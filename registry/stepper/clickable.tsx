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
import { useState } from "react";

export default function StepperClickable() {
  const [activeStep, setActiveStep] = useState(1);
  const [visited, setVisited] = useState<number[]>([1]);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    if (!visited.includes(step)) {
      setVisited([...visited, step]);
    }
  };

  return (
    <Stepper value={activeStep} onValueChange={handleStepChange}>
      <StepperNav>
        <StepperItem step={1} completed={visited.includes(1) && activeStep > 1}>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <div>
              <StepperTitle>Introduction</StepperTitle>
              <StepperDescription>Get started</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2} completed={visited.includes(2) && activeStep > 2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <div>
              <StepperTitle>Configuration</StepperTitle>
              <StepperDescription>Setup options</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3} completed={visited.includes(3) && activeStep > 3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <div>
              <StepperTitle>Review</StepperTitle>
              <StepperDescription>Check details</StepperDescription>
            </div>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">Welcome!</h3>
            <p className="text-sm text-muted-foreground">
              Click any step above to jump directly to it.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">Configuration Options</h3>
            <p className="text-sm text-muted-foreground">
              Set up your preferences and options.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">Review & Confirm</h3>
            <p className="text-sm text-muted-foreground">
              Visited steps: {visited.sort().join(", ")}
            </p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

