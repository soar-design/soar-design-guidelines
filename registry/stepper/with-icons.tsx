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
    >
      <StepperNav>
        <StepperItem step={1} completed>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Personal</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Location</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Payment</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={4}>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Done</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <User className="h-4 w-4" />
              Personal Information
            </h3>
            <p className="text-sm text-muted-foreground">
              Completed: Your personal details have been saved.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Location Details
            </h3>
            <p className="text-sm text-muted-foreground">
              Enter your address and location information.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payment Method
            </h3>
            <p className="text-sm text-muted-foreground">
              Add your payment information securely.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={4}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              All Set!
            </h3>
            <p className="text-sm text-muted-foreground">
              Your setup is complete.
            </p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

