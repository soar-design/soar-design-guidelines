'use client';

import * as React from 'react';
import { Alert, AlertIcon, AlertTitle } from '@soar-design/soar-react-components';
import { Button } from '@soar-design/soar-react-components';
import { Calendar } from '@soar-design/soar-react-components';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@soar-design/soar-react-components';
import { Popover, PopoverContent, PopoverTrigger } from '@soar-design/soar-react-components';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { Calendar as CalendarIcon, CheckCircle2, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const arabicWeekdayAbbreviations = ["أح", "اث", "ثل", "أرب", "خم", "جم", "سب"];

// Define the schema with Zod
const FormSchema = z.object({
  singleDate: z
    .string()
    .nonempty({ message: 'التاريخ مطلوب.' })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'يرجى اختيار تاريخ صحيح.',
    }),
  rangeDate: z
    .object({
      from: z.string().optional(),
      to: z.string().optional(),
    })
    .optional()
    .refine(
      (val) =>
        !val ||
        (!val.from && !val.to) ||
        (val.from && val.to && !isNaN(Date.parse(val.from)) && !isNaN(Date.parse(val.to))),
      {
        message: 'يرجى اختيار نطاق تاريخ صحيح.',
        path: ['rangeDate'],
      },
    ),
});

export default function DatePickerForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      singleDate: '',
      rangeDate: { from: '', to: '' },
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const message = [];
    if (data.singleDate) {
      message.push(`تاريخ واحد: ${format(new Date(data.singleDate), 'PPP', { locale: ar })}`);
    }
    if (data.rangeDate?.from && data.rangeDate?.to) {
      message.push(
        `نطاق: ${format(new Date(data.rangeDate.from), 'PPP', { locale: ar })} - ${format(new Date(data.rangeDate.to), 'PPP', { locale: ar })}`,
      );
    }
    const finalMessage = message.length > 0 ? message.join(' | ') : 'لم يتم اختيار أي تواريخ';

    toast.custom((t) => (
      <Alert variant="mono" icon="primary" onClose={() => toast.dismiss(t)}>
        <AlertIcon>
          <CheckCircle2 />
        </AlertIcon>
        <AlertTitle>{finalMessage}</AlertTitle>
      </Alert>
    ));
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[300px] space-y-6">
        <FormField
          control={form.control}
          name="singleDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تاريخ واحد:</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Button
                        type="button"
                        variant="outline"
                        mode="input"
                        placeholder={!field.value}
                        className="w-full"
                      >
                        <CalendarIcon />
                        {field.value ? format(new Date(field.value), 'dd MMM, yyyy', { locale: ar }) : <span>اختر تاريخًا</span>}
                      </Button>
                      {field.value && (
                        <Button
                          type="button"
                          variant="dim"
                          size="sm"
                          className="absolute top-1/2 -end-0 -translate-y-1/2"
                          onClick={(e) => {
                            e.preventDefault();
                            form.setValue('singleDate', '', {
                              shouldValidate: true,
                            });
                          }}
                        >
                          <X />
                        </Button>
                      )}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) =>
                        form.setValue('singleDate', date?.toISOString() || '', {
                          shouldValidate: true,
                        })
                      }
                      autoFocus
                      locale={ar}
                      formatters={{
                        formatWeekdayName: (date) => arabicWeekdayAbbreviations[date.getDay()],
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormDescription>أدخل تاريخك الواحد للمتابعة</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rangeDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نطاق التاريخ:</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Button
                        variant="outline"
                        mode="input"
                        placeholder={!field.value?.from && !field.value?.to}
                        className="w-full"
                      >
                        <CalendarIcon />
                        {field.value?.from ? (
                          field.value.to ? (
                            `${format(new Date(field.value.from), 'dd MMM, yyyy', { locale: ar })} - ${format(new Date(field.value.to), 'dd MMM, yyyy', { locale: ar })}`
                          ) : (
                            format(new Date(field.value.from), 'dd MMM, yyyy', { locale: ar })
                          )
                        ) : (
                          <span>اختر نطاق تاريخ</span>
                        )}
                      </Button>
                      {field.value?.from && (
                        <Button
                          variant="dim"
                          size="sm"
                          className="absolute top-1/2 -end-0 -translate-y-1/2"
                          onClick={(e) => {
                            e.preventDefault();
                            form.setValue('rangeDate', { from: '', to: '' }, { shouldValidate: true });
                          }}
                        >
                          <X />
                        </Button>
                      )}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={
                        field.value?.from && field.value?.to
                          ? {
                              from: new Date(field.value.from),
                              to: new Date(field.value.to),
                            }
                          : undefined
                      }
                      onSelect={(range) =>
                        form.setValue(
                          'rangeDate',
                          {
                            from: range?.from?.toISOString() || '',
                            to: range?.to?.toISOString() || '',
                          },
                          { shouldValidate: true },
                        )
                      }
                      numberOfMonths={2}
                      autoFocus
                      locale={ar}
                      formatters={{
                        formatWeekdayName: (date) => arabicWeekdayAbbreviations[date.getDay()],
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormDescription>أدخل نطاق التاريخ الخاص بك للمتابعة</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end gap-2.5">
          <Button type="button" variant="outline" onClick={handleReset}>
            إعادة تعيين
          </Button>
          <Button type="submit">إرسال</Button>
        </div>
      </form>
    </Form>
  );
}

