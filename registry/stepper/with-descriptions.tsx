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
    <Stepper defaultValue={2}>
      <StepperNav>
        <StepperItem step={1} completed>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <div>
              <StepperTitle>Personal Info</StepperTitle>
              <StepperDescription>Basic details</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <div>
              <StepperTitle>Address</StepperTitle>
              <StepperDescription>Shipping details</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <div>
              <StepperTitle>Payment</StepperTitle>
              <StepperDescription>Billing info</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={4}>
          <StepperTrigger>
            <StepperIndicator>4</StepperIndicator>
            <div>
              <StepperTitle>Review</StepperTitle>
              <StepperDescription>Confirm order</StepperDescription>
            </div>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">Enter your personal information.</p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">Provide your shipping address.</p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">Add your payment method.</p>
          </div>
        </StepperContent>

        <StepperContent value={4}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <p className="text-sm">Review your order before confirming.</p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

