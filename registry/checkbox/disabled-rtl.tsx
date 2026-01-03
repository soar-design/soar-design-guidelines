"use client";

import { useId } from "react";
import { Checkbox, Label } from "@soar-design/soar-react-components";

export default function CheckboxDemo() {
  const id = useId();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} disabled />
      <Label htmlFor={id}>حالة معطلة</Label>
    </div>
  );
}

