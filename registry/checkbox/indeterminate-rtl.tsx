"use client";

import { useId, useState } from "react";
import { Checkbox, Label } from "@soar-design/soar-react-components";

export default function CheckboxDemo() {
  const id = useId();
  const [checked, setChecked] = useState<"indeterminate" | boolean>("indeterminate");

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor={id}>حالة غير محددة</Label>
    </div>
  );
}

