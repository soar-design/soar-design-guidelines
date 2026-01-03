"use client";

import { Calendar } from "@soar-design/soar-react-components";
import { useState } from "react";
import { ar } from "date-fns/locale";

const arabicWeekdayAbbreviations = ["أح", "اث", "ثل", "أرب", "خم", "جم", "سب"];

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
      locale={ar}
      formatters={{
        formatWeekdayName: (date) => arabicWeekdayAbbreviations[date.getDay()],
      }}
      className="rounded-md border"
    />
  );
}

