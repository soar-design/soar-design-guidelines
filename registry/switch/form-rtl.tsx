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
import { Switch } from "@soar-design/soar-react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function SwitchForm() {
  // Define form validation schema using zod
  const FormSchema = z.object({
    autoUpdate: z.boolean().refine((val) => val === true, {
      message: "يجب تفعيل التحديث التلقائي للمتابعة.",
    }),
  });

  // Initialize form with react-hook-form and zod
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { autoUpdate: false },
  });

  // Handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.custom((t) => (
      <Alert variant="mono" icon="primary" onClose={() => toast.dismiss(t)}>
        <AlertIcon>
          <CheckCircle2 />
        </AlertIcon>
        <AlertTitle>التحديث التلقائي {data.autoUpdate ? "مفعل" : "معطل"}.</AlertTitle>
      </Alert>
    ));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[300px] space-y-6" dir="rtl">
        {/* Switch Field */}
        <FormField
          control={form.control}
          name="autoUpdate"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>تفعيل التحديث التلقائي</FormLabel>
              </div>
              <FormDescription>
                يجب تفعيل التحديث التلقائي لتلقي آخر التحديثات تلقائيًا.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit and Reset Buttons */}
        <div className="flex items-center justify-start gap-2.5">
          <Button type="reset" variant="outline" onClick={() => form.reset({ autoUpdate: false })}>
            إعادة تعيين
          </Button>
          <Button type="submit">إرسال</Button>
        </div>
      </form>
    </Form>
  );
}

