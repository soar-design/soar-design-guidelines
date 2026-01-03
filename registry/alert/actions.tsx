"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import { AlertCircle } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-[75%] gap-6">
      <Alert variant="primary" close={false}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Example Alert Title</AlertTitle>
          <AlertDescription>
            <p>
              Insert the alert description here. This is an example of a two-line message for better
              visual clarity.
            </p>
            <div className="space-x-3.5">
              <Button variant="inverse" mode="link" underlined="solid" size="md">
                Upgrade
              </Button>
              <Button variant="inverse" mode="link" underline="solid" size="md">
                Dismiss
              </Button>
            </div>
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="destructive" appearance="light" close={false}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Example Alert Title</AlertTitle>
          <AlertDescription>
            <p>
              Insert the alert description here. This is an example of a two-line message for better
              visual clarity.
            </p>
            <div className="space-x-3.5">
              <Button variant="foreground" mode="link" underlined="solid" size="md">
                Upgrade
              </Button>
              <Button variant="foreground" mode="link" underline="solid" size="md">
                Dismiss
              </Button>
            </div>
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}
