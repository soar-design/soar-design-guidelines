"use client";

import { Alert, AlertIcon, AlertTitle } from "@soar-design/soar-react-components";
import { AlertCircle, Bell, CheckCircle, AlertTriangle, Info } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-[75%] gap-6">
      <Alert appearance="outline" close={true}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertTitle>This is a default alert</AlertTitle>
      </Alert>

      <Alert variant="primary" appearance="outline" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a primary alert</AlertTitle>
      </Alert>
      <Alert variant="success" appearance="outline" close={true}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>This is a success alert</AlertTitle>
      </Alert>
      <Alert variant="destructive" appearance="outline" close={true}>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <AlertTitle>This is a destructive alert</AlertTitle>
      </Alert>
      <Alert variant="info" appearance="outline" close={true}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <AlertTitle>This is an info alert</AlertTitle>
      </Alert>
      <Alert variant="warning" appearance="outline" close={true}>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <AlertTitle>This is a warning alert</AlertTitle>
      </Alert>
    </div>
  );
}
