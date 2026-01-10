"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@soar-design/soar-react-components";
import { Calendar } from "@soar-design/soar-react-components";
import { Label } from "@soar-design/soar-react-components";
import { CalendarDayButton } from "./calendar-day-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";

export function CalendarDateOfBirthDocs() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            components={{
              DayButton: CalendarDayButton,
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
