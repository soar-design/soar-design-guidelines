"use client";

import { Calendar } from "@soar-design/soar-react-components";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

export default function CalendarRange() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-md border"
    />
  );
}

