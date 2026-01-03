"use client";

import { Calendar } from "@soar-design/soar-react-components";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { ar } from "date-fns/locale";

const arabicWeekdayAbbreviations = ["أح", "اث", "ثل", "أرب", "خم", "جم", "سب"];

export default function CalendarRange() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      locale={ar}
      formatters={{
        formatWeekdayName: (date) => arabicWeekdayAbbreviations[date.getDay()],
      }}
      className="rounded-md border"
    />
  );
}

