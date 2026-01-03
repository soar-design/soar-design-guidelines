"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@soar-design/soar-react-components";

export default function ToggleGroupSingle() {
  const [value, setValue] = useState("1W");

  return (
    <div dir="rtl">
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(newValue) => {
          if (newValue) setValue(newValue);
        }}
      >
        <ToggleGroupItem value="1D">يوم</ToggleGroupItem>
        <ToggleGroupItem value="1W">أسبوع</ToggleGroupItem>
        <ToggleGroupItem value="1M">شهر</ToggleGroupItem>
        <ToggleGroupItem value="6M">6 أشهر</ToggleGroupItem>
        <ToggleGroupItem value="1Y">سنة</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

