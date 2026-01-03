"use client";

import { Alert, AlertIcon, AlertTitle, AlertToolbar } from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import { Bell } from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-[75%] gap-6">
      <Alert close={true}>
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
    </div>
  );
}
