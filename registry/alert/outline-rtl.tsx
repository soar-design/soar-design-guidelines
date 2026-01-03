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
        <AlertTitle>هذا تنبيه افتراضي</AlertTitle>
      </Alert>

      <Alert variant="primary" appearance="outline" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>هذا تنبيه أساسي</AlertTitle>
      </Alert>
      <Alert variant="success" appearance="outline" close={true}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه نجاح</AlertTitle>
      </Alert>
      <Alert variant="destructive" appearance="outline" close={true}>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه تدميري</AlertTitle>
      </Alert>
      <Alert variant="info" appearance="outline" close={true}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <AlertTitle>هذا تنبيه معلومات</AlertTitle>
      </Alert>
      <Alert variant="warning" appearance="outline" close={true}>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه تحذيري</AlertTitle>
      </Alert>
    </div>
  );
}

