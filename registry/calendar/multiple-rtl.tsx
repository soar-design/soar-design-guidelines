"use client";

import * as React from "react";
import { Calendar } from "@soar-design/soar-react-components";
import { ar } from "date-fns/locale";

const arabicWeekdayAbbreviations = ["أح", "اث", "ثل", "أرب", "خم", "جم", "سب"];

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      locale={ar}
      formatters={{
        formatWeekdayName: (date) => arabicWeekdayAbbreviations[date.getDay()],
      }}
      className="rounded-md border border-border shadow-xs"
    />
  );
}

