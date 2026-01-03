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
        <Button variant="outline">عرض القائمة</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>طريقة الإشعار</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={notificationMethod}
          onValueChange={setNotificationMethod}
        >
          <DropdownMenuRadioItem
            value="email"
            onSelect={(event) => event.preventDefault()}
          >
            إشعارات البريد الإلكتروني
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="sms"
            onSelect={(event) => event.preventDefault()}
          >
            إشعارات الرسائل النصية
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="push"
            onSelect={(event) => event.preventDefault()}
          >
            الإشعارات الفورية
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

