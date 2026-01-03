"use client";

import { Alert, AlertIcon, AlertTitle } from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "@soar-design/soar-react-components";
import { z } from "zod";

export default function TextareaForm() {
  // Validation schema
  const FormSchema = z.object({
    message: z
      .string()
      .min(10, "يجب أن تكون الرسالة 10 أحرف على الأقل.")
      .max(500, "لا يمكن أن تتجاوز الرسالة 500 حرف."),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { message: "" },
  });

  function onSubmit() {
    toast.custom((t) => (
      <Alert variant="mono" icon="primary" onClose={() => toast.dismiss(t)}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>تم إرسال رسالتك بنجاح!</AlertTitle>
      </Alert>
    ));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6" dir="rtl">
        {/* Textarea Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رسالتك</FormLabel>
              <FormControl>
                <Textarea placeholder="اكتب رسالتك هنا..." {...field} />
              </FormControl>
              <FormDescription>شارك أفكارك أو ملاحظاتك بين 10 إلى 500 حرف.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit and Reset Buttons */}
        <div className="flex items-center justify-start gap-2.5">
          <Button type="reset" variant="outline" onClick={() => form.reset()}>
            إعادة تعيين
          </Button>
          <Button type="submit">إرسال</Button>
        </div>
      </form>
    </Form>
  );
}

