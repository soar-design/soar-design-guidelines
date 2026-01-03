"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components";

const formSchema = z.object({
  country: z.string().min(1, "يرجى اختيار دولة."),
});

export default function FormWithSelect() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" dir="rtl">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الدولة</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر دولة" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="us">الولايات المتحدة</SelectItem>
                  <SelectItem value="uk">المملكة المتحدة</SelectItem>
                  <SelectItem value="ca">كندا</SelectItem>
                  <SelectItem value="au">أستراليا</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                اختر دولة إقامتك.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">إرسال</Button>
      </form>
    </Form>
  );
}

