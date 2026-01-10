"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";

import { Calendar } from "@soar-design/soar-react-components";
import { CalendarDayButton } from "./calendar-day-button";

export function CalendarRangeDocsRTL() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border shadow-sm"
      components={{
        DayButton: CalendarDayButton,
      }}
    />
  );
}
