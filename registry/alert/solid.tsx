"use client";

import { Alert, AlertIcon, AlertTitle, AlertToolbar } from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import { Bell, CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-[75%] gap-6">
      <Alert variant="primary" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a primary alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>
      <Alert variant="success" close={true}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>This is a success alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>
      <Alert variant="destructive" close={true}>
        <AlertIcon>
          <XCircle />
        </AlertIcon>
        <AlertTitle>This is a destructive alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>
      <Alert variant="info" close={true}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <AlertTitle>This is an info alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>
      <Alert variant="warning" close={true}>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <AlertTitle>This is a warning alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="flex mt-0.5"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>
    </div>
  );
}
