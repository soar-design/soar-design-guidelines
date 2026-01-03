"use client";

import { useState } from "react";
import { Alert, AlertIcon, AlertTitle } from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@soar-design/soar-react-components";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "@soar-design/soar-react-components";
import { z } from "zod";

export default function DialogDemo() {
  const [open, setOpen] = useState(false);

  const FormSchema = z.object({
    feedback: z
      .string()
      .min(1, "الملاحظات مطلوبة")
      .max(200, "لا يمكن أن تتجاوز الملاحظات 200 حرف"),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { feedback: "" },
    mode: "onSubmit",
  });

  function onSubmit() {
    toast.custom((t) => (
      <Alert variant="mono" icon="primary" onClose={() => toast.dismiss(t)}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>تم إرسال ملاحظاتك بنجاح</AlertTitle>
      </Alert>
    ));

    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">عرض الحوار</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>اقترح فكرة</DialogTitle>
              <DialogDescription>اوصف اقتراحك.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="أخبرنا كيف يمكننا تحسين منتجنا"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      يرجى عدم تضمين أي معلومات حساسة
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  إغلاق
                </Button>
              </DialogClose>
              <Button type="submit">إرسال</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

