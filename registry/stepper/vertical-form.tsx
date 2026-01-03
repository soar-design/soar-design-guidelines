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
  Button,
  Input,
  Label,
} from "@soar-design/soar-react-components";
import { useState } from "react";
import { User, Building, FileText, Check } from "lucide-react";

export default function StepperVerticalForm() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Stepper
      value={activeStep}
      onValueChange={setActiveStep}
      orientation="vertical"
      indicators={{
        active: <User className="h-3 w-3" />,
        completed: <Check className="h-3 w-3" />,
      }}
    >
      <div className="flex gap-6">
        <StepperNav>
          <StepperItem step={1} completed={activeStep > 1}>
            <StepperTrigger>
              <StepperIndicator />
              <div>
                <StepperTitle>Personal</StepperTitle>
                <StepperDescription>Your details</StepperDescription>
              </div>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>

          <StepperItem step={2} completed={activeStep > 2}>
            <StepperTrigger>
              <StepperIndicator />
              <div>
                <StepperTitle>Company</StepperTitle>
                <StepperDescription>Organization info</StepperDescription>
              </div>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>

          <StepperItem step={3} completed={activeStep > 3}>
            <StepperTrigger>
              <StepperIndicator />
              <div>
                <StepperTitle>Documents</StepperTitle>
                <StepperDescription>Upload files</StepperDescription>
              </div>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>

          <StepperItem step={4}>
            <StepperTrigger>
              <StepperIndicator />
              <div>
                <StepperTitle>Done</StepperTitle>
                <StepperDescription>All set!</StepperDescription>
              </div>
            </StepperTrigger>
          </StepperItem>
        </StepperNav>

        <StepperPanel className="flex-1">
          <StepperContent value={1}>
            <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <Button onClick={() => setActiveStep(2)}>Continue</Button>
            </div>
          </StepperContent>

          <StepperContent value={2}>
            <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
              <div className="space-y-2">
                <Label>Company Name</Label>
                <Input placeholder="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label>Position</Label>
                <Input placeholder="Software Engineer" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setActiveStep(1)}>
                  Back
                </Button>
                <Button onClick={() => setActiveStep(3)}>Continue</Button>
              </div>
            </div>
          </StepperContent>

          <StepperContent value={3}>
            <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
              <div className="space-y-2">
                <Label>Upload Documents</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center text-sm text-muted-foreground">
                  Drop files here or click to upload
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setActiveStep(2)}>
                  Back
                </Button>
                <Button onClick={() => setActiveStep(4)}>Continue</Button>
              </div>
            </div>
          </StepperContent>

          <StepperContent value={4}>
            <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
              <div className="flex items-center gap-2 text-green-600">
                <Check className="h-5 w-5" />
                <h3 className="font-semibold">Setup Complete!</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Your account is ready to use.
              </p>
              <Button onClick={() => setActiveStep(1)}>Start Over</Button>
            </div>
          </StepperContent>
        </StepperPanel>
      </div>
    </Stepper>
  );
}

