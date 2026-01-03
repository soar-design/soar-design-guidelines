"use client";

import * as React from "react";
import { Button } from "@soar-design/soar-react-components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components";

export default function DropdownMenuWithRadio() {
  const [notificationMethod, setNotificationMethod] =
    React.useState("email"); // Default method

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Show Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Notification Method</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={notificationMethod}
          onValueChange={setNotificationMethod}
        >
          <DropdownMenuRadioItem
            value="email"
            onSelect={(event) => event.preventDefault()}
          >
            Email Notifications
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="sms"
            onSelect={(event) => event.preventDefault()}
          >
            SMS Notifications
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="push"
            onSelect={(event) => event.preventDefault()}
          >
            Push Notifications
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
