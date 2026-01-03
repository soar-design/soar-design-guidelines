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
    >
      <StepperNav>
        <StepperItem step={1} completed>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <StepperTitle>Upload</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2} loading>
          <StepperTrigger>
            <StepperIndicator />
            <StepperTitle>Processing</StepperTitle>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <StepperTitle>Download</StepperTitle>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">Upload Complete</h3>
            <p className="text-sm text-muted-foreground">
              Your files have been uploaded successfully.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <div className="flex items-center gap-3 mb-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <h3 className="font-semibold">Processing...</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Please wait while we process your files.
            </p>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground">
            <h3 className="font-semibold mb-2">Ready to Download</h3>
            <p className="text-sm text-muted-foreground">
              Your processed files are ready.
            </p>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

