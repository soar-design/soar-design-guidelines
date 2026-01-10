"use client";

import * as React from "react";

import { Calendar } from "@soar-design/soar-react-components";
import { CalendarDayButton } from "./calendar-day-button";

export function CalendarWithTimezoneDocs() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      timeZone={timeZone}
      components={{
        DayButton: CalendarDayButton,
      }}
    />
  );
}
