"use client"

import * as React from "react"
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DirectionProvider,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Input,
  Label,
} from "@soar-design/soar-react-components"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export function DrawerResponsiveDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <DirectionProvider dir="rtl">
        <div className="w-full max-w-lg mx-auto flex justify-center">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary">تعديل الملف الشخصي</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>تعديل الملف الشخصي</DialogTitle>
                <DialogDescription>
                  قم بإجراء التغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.
                </DialogDescription>
              </DialogHeader>
              <ProfileForm />
            </DialogContent>
          </Dialog>
        </div>
      </DirectionProvider>
    )
  }

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="secondary">تعديل الملف الشخصي</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-right">
              <DrawerTitle>تعديل الملف الشخصي</DrawerTitle>
              <DrawerDescription>
                قم بإجراء التغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.
              </DrawerDescription>
            </DrawerHeader>
            <ProfileForm className="px-4" />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="secondary">إلغاء</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </DirectionProvider>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email-responsive-rtl">البريد الإلكتروني</Label>
        <Input type="email" id="email-responsive-rtl" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username-responsive-rtl">اسم المستخدم</Label>
        <Input id="username-responsive-rtl" defaultValue="@shadcn" />
      </div>
      <Button type="submit">حفظ التغييرات</Button>
    </form>
  )
}
