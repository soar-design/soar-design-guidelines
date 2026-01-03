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
import { Input } from "@soar-design/soar-react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "@soar-design/soar-react-components";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("يرجى إدخال عنوان بريد إلكتروني صحيح."),
});

export default function FormDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = () => {
    toast.custom((t) => (
      <Alert variant="mono" icon="primary" onClose={() => toast.dismiss(t)}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>تم إرسال النموذج بنجاح</AlertTitle>
      </Alert>
    ));
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-80 space-y-6" dir="rtl">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>عنوان البريد الإلكتروني:</FormLabel>
              <FormControl>
                <Input placeholder="عنوان البريد الإلكتروني" {...field} />
              </FormControl>
              <FormDescription>أدخل بريدك الإلكتروني للمتابعة</FormDescription>
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

