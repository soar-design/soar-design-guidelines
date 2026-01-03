"use client";

import { Alert, AlertIcon, AlertTitle, AlertToolbar } from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import { Bell, CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-[75%] gap-6">
      <Alert variant="mono" icon="primary" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>هذا تنبيه أساسي</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            ترقية
          </Button>
        </AlertToolbar>
      </Alert>
      <Alert variant="mono" icon="success" close={true}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه نجاح</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            ترقية
          </Button>
        </AlertToolbar>
      </Alert>
      <Alert variant="mono" icon="destructive" close={true}>
        <AlertIcon>
          <XCircle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه تدميري</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            ترقية
          </Button>
        </AlertToolbar>
      </Alert>
      <Alert variant="mono" icon="info" close={true}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <AlertTitle>هذا تنبيه معلومات</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            ترقية
          </Button>
        </AlertToolbar>
      </Alert>
      <Alert variant="mono" icon="warning" close={true}>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <AlertTitle>هذا تنبيه تحذيري</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            ترقية
          </Button>
        </AlertToolbar>
      </Alert>
    </div>
  );
}

