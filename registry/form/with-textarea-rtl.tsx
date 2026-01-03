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
  Textarea,
} from "@soar-design/soar-react-components";

const formSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "يجب أن تكون السيرة الذاتية 10 أحرف على الأقل.",
    })
    .max(160, {
      message: "يجب ألا تتجاوز السيرة الذاتية 160 حرفًا.",
    }),
});

export default function FormWithTextarea() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" dir="rtl">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>السيرة الذاتية</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="أخبرنا قليلاً عن نفسك"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                يمكنك كتابة ما يصل إلى 160 حرفًا.
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

