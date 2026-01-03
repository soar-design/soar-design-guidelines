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
  Button,
} from "@soar-design/soar-react-components";
import { useState } from "react";

export default function StepperLinearProgress() {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  return (
    <div className="space-y-6">
      <Stepper value={activeStep} onValueChange={setActiveStep}>
        <StepperNav>
          {[1, 2, 3, 4, 5].map((step) => (
            <StepperItem
              key={step}
              step={step}
              completed={activeStep > step}
              disabled={activeStep < step}
            >
              <StepperTrigger>
                <StepperIndicator>{step}</StepperIndicator>
              </StepperTrigger>
              {step < totalSteps && <StepperSeparator />}
            </StepperItem>
          ))}
        </StepperNav>

        <StepperPanel className="mt-6">
          {[1, 2, 3, 4, 5].map((step) => (
            <StepperContent key={step} value={step}>
              <div className="rounded-lg border bg-card p-6 text-card-foreground">
                <h3 className="font-semibold mb-2">Step {step}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {step === 5
                    ? "You've completed all steps!"
                    : `Complete step ${step} to continue.`}
                </p>
                <div className="flex gap-2">
                  {step < totalSteps && (
                    <Button onClick={handleNext}>
                      {step === totalSteps - 1 ? "Finish" : "Continue"}
                    </Button>
                  )}
                  {step === totalSteps && (
                    <Button onClick={handleReset}>Start Over</Button>
                  )}
                </div>
              </div>
            </StepperContent>
          ))}
        </StepperPanel>
      </Stepper>

      <div className="text-center text-sm text-muted-foreground">
        Progress: {Math.round((activeStep / totalSteps) * 100)}%
      </div>
    </div>
  );
}

