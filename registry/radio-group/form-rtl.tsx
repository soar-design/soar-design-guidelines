'use client';

import { Alert, AlertIcon, AlertTitle } from '@soar-design/soar-react-components';
import { Button } from '@soar-design/soar-react-components';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@soar-design/soar-react-components';
import { RadioGroup, RadioGroupItem } from '@soar-design/soar-react-components';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from '@soar-design/soar-react-components';
import { z } from 'zod';

export default function RadioGroupForm() {
  // Define schema for form validation
  const FormSchema = z.object({
    selectedOption: z.string().nonempty({
      message: 'يجب عليك اختيار خيار.',
    }),
  });

  // Initialize react-hook-form with zod schema
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { selectedOption: '' },
  });

  // Form submission handler
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.custom((t) => (
      <Alert variant="mono" icon="primary" onClose={() => toast.dismiss(t)}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>الخيار المحدد: {data.selectedOption}</AlertTitle>
      </Alert>
    ));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[300px] space-y-6" dir="rtl">
        <FormField
          control={form.control}
          name="selectedOption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>اختر خيارًا</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value} dir="rtl">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="default" id="default-option" />
                    <FormLabel htmlFor="default-option" className="font-normal">
                      افتراضي
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="intermediate" id="intermediate-option" />
                    <FormLabel htmlFor="intermediate-option" className="font-normal">
                      متوسط
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="advanced" id="advanced-option" />
                    <FormLabel htmlFor="advanced-option" className="font-normal">
                      متقدم
                    </FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription>يرجى اختيار أحد الخيارات للمتابعة.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-2.5">
          <Button type="reset" variant="outline">
            إعادة تعيين
          </Button>
          <Button type="submit">إرسال</Button>
        </div>
      </form>
    </Form>
  );
}

