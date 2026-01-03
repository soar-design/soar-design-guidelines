"use client";

import { useState } from "react";
import { Switch } from "@soar-design/soar-react-components";

export default function SwitchControlled() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4" dir="rtl">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Switch id="controlled" checked={checked} onCheckedChange={setChecked} />
        <label htmlFor="controlled" className="text-sm font-medium">
          {checked ? "المفتاح مفعل" : "المفتاح معطل"}
        </label>
      </div>
      <div className="text-sm text-muted-foreground">
        الحالة الحالية: <code className="bg-muted px-2 py-1 rounded">{String(checked)}</code>
      </div>
    </div>
  );
}

