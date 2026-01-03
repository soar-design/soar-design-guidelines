"use client";

import * as React from "react";
import { Button } from "@soar-design/soar-react-components";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

export default function DropdownMenuWithCheckboxes() {
  type Checked = DropdownMenuCheckboxItemProps["checked"];

  const [showTaskList, setShowTaskList] = React.useState<Checked>(true);
  const [showCalendar, setShowCalendar] = React.useState<Checked>(false);
  const [showNotifications, setShowNotifications] =
    React.useState<Checked>(true);
  const [showAnalytics, setShowAnalytics] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">عرض القائمة</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>عناصر لوحة التحكم</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showTaskList}
          onSelect={(event) => event.preventDefault()}
          onCheckedChange={setShowTaskList}
        >
          قائمة المهام
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showCalendar}
          onSelect={(event) => event.preventDefault()}
          onCheckedChange={setShowCalendar}
        >
          التقويم
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showNotifications}
          onSelect={(event) => event.preventDefault()}
          onCheckedChange={setShowNotifications}
        >
          الإشعارات
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showAnalytics}
          onSelect={(event) => event.preventDefault()}
          onCheckedChange={setShowAnalytics}
        >
          نظرة عامة على التحليلات
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

