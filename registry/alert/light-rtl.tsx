"use client";

import { Alert, AlertIcon, AlertTitle } from "@soar-design/soar-react-components";
import {
  Bell,
  CircleAlert,
  CircleCheck,
  MessageSquareWarning,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-[75%] gap-6">
      <Alert appearance="light" close={true}>
        <AlertIcon>
          <CircleAlert />
        </AlertIcon>
        <AlertTitle>هذا تنبيه افتراضي</AlertTitle>
      </Alert>

      <Alert variant="primary" appearance="light" close={true}>
        <AlertIcon>
          <MessageSquareWarning />
        </AlertIcon>
        <AlertTitle>هذا تنبيه أساسي</AlertTitle>
      </Alert>
      <Alert variant="success" appearance="light" close={true}>
        <AlertIcon>
          <CircleCheck />
        </AlertIcon>
        <AlertTitle>هذا تنبيه نجاح</AlertTitle>
      </Alert>
      <Alert variant="destructive" appearance="light" close={true}>
        <AlertIcon>
          <TriangleAlert />
        </AlertIcon>
        <AlertTitle>هذا تنبيه تدميري</AlertTitle>
      </Alert>
      <Alert variant="info" appearance="light" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>هذا تنبيه معلومات</AlertTitle>
      </Alert>
      <Alert variant="warning" appearance="light" close={true}>
        <AlertIcon>
          <ShieldAlert />
        </AlertIcon>
        <AlertTitle>هذا تنبيه تحذيري</AlertTitle>
      </Alert>
    </div>
  );
}

