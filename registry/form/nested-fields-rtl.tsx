"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@soar-design/soar-react-components";

const formSchema = z.object({
  user: z.object({
    firstName: z.string().min(2, "يجب أن يكون الاسم الأول حرفين على الأقل"),
    lastName: z.string().min(2, "يجب أن يكون اسم العائلة حرفين على الأقل"),
  }),
  address: z.object({
    street: z.string().min(1, "الشارع مطلوب"),
    city: z.string().min(1, "المدينة مطلوبة"),
    zipCode: z.string().regex(/^\d{5}$/, "يجب أن يكون الرمز البريدي 5 أرقام"),
  }),
});

export default function FormNestedFields() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: {
        firstName: "",
        lastName: "",
      },
      address: {
        street: "",
        city: "",
        zipCode: "",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" dir="rtl">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">المعلومات الشخصية</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="user.firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم الأول</FormLabel>
                  <FormControl>
                    <Input placeholder="أحمد" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user.lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم العائلة</FormLabel>
                  <FormControl>
                    <Input placeholder="محمد" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">العنوان</h3>
          <FormField
            control={form.control}
            name="address.street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الشارع</FormLabel>
                <FormControl>
                  <Input placeholder="شارع الملك فهد 123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>المدينة</FormLabel>
                  <FormControl>
                    <Input placeholder="الرياض" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الرمز البريدي</FormLabel>
                  <FormControl>
                    <Input placeholder="12345" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit">إرسال</Button>
      </form>
    </Form>
  );
}

