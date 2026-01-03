"use client";

import { Calendar } from "@soar-design/soar-react-components";
import { useState } from "react";
import { ar } from "date-fns/locale";

const arabicWeekdayAbbreviations = ["أح", "اث", "ثل", "أرب", "خم", "جم", "سب"];

export default function CalendarShowOutsideDays() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">بدون أيام خارجية:</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={false}
          locale={ar}
          formatters={{
            formatWeekdayName: (date) => arabicWeekdayAbbreviations[date.getDay()],
          }}
          className="rounded-md border"
        />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">مع أيام خارجية:</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={true}
          locale={ar}
          formatters={{
            formatWeekdayName: (date) => arabicWeekdayAbbreviations[date.getDay()],
          }}
          className="rounded-md border"
        />
      </div>
    </div>
  );
}

