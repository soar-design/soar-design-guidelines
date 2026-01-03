"use client";

import { Calendar } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function CalendarDisabled() {
  const [date, setDate] = useState<Date | undefined>();

  const disabledDays = [
    { dayOfWeek: [0, 6] }, // Disable weekends
    { before: new Date() }, // Disable past dates
  ];

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={disabledDays}
      className="rounded-md border"
    />
  );
}

