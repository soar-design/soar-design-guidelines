"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@soar-design/soar-react-components";

export default function ToggleGroupSingle() {
  const [value, setValue] = useState("1W");

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(newValue) => {
        if (newValue) setValue(newValue);
      }}
    >
      <ToggleGroupItem value="1D">1D</ToggleGroupItem>
      <ToggleGroupItem value="1W">1W</ToggleGroupItem>
      <ToggleGroupItem value="1M">1M</ToggleGroupItem>
      <ToggleGroupItem value="6M">6M</ToggleGroupItem>
      <ToggleGroupItem value="1Y">1Y</ToggleGroupItem>
    </ToggleGroup>
  );
}
