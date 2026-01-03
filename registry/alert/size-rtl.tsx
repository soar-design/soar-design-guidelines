"use client";

import { Alert, AlertIcon, AlertTitle } from "@soar-design/soar-react-components";
import { AlertCircle } from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-[75%] gap-6">
      <Alert variant="primary" appearance="outline" size="sm" close={true}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه بحجم صغير</AlertTitle>
      </Alert>
      <Alert variant="primary" appearance="outline" close={true}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه بحجم متوسط</AlertTitle>
      </Alert>
      <Alert variant="primary" appearance="outline" size="lg" close={true}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه بحجم كبير</AlertTitle>
      </Alert>
    </div>
  );
}

