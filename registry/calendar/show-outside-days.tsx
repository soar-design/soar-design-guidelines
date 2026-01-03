"use client";

import { Calendar } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function CalendarShowOutsideDays() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Without outside days:</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={false}
          className="rounded-md border"
        />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">With outside days:</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={true}
          className="rounded-md border"
        />
      </div>
    </div>
  );
}

