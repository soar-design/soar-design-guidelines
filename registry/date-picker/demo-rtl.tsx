'use client';

import * as React from 'react';
import { Button } from '@soar-design/soar-react-components';
import { Calendar } from '@soar-design/soar-react-components';
import { Popover, PopoverContent, PopoverTrigger } from '@soar-design/soar-react-components';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { Calendar as CalendarIcon, X } from 'lucide-react';

const arabicWeekdayAbbreviations = ["أح", "اث", "ثل", "أرب", "خم", "جم", "سب"];

export default function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    setDate(undefined);
    e.preventDefault();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative w-[250px]">
          <Button type="button" variant="outline" mode="input" placeholder={!date} className="w-full">
            <CalendarIcon />
            {date ? format(date, 'PPP', { locale: ar }) : <span>اختر تاريخًا</span>}
          </Button>
          {date && (
            <Button
              type="button"
              variant="dim"
              size="sm"
              className="absolute top-1/2 -end-0 -translate-y-1/2"
              onClick={handleReset}
            >
              <X />
            </Button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          autoFocus
          locale={ar}
          formatters={{
            formatWeekdayName: (date) => arabicWeekdayAbbreviations[date.getDay()],
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

