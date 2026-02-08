"use client"

import * as React from "react"
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DirectionProvider,
  Input,
  Label,
} from "@soar-design/soar-react-components"

export function DialogDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="secondary">فتح الحوار</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>تعديل الملف الشخصي</DialogTitle>
                <DialogDescription>
                  قم بإجراء التغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-demo-rtl">الاسم</Label>
                  <Input id="name-demo-rtl" name="name" defaultValue="بيدرو دوارتي" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-demo-rtl">اسم المستخدم</Label>
                  <Input id="username-demo-rtl" name="username" defaultValue="@peduarte" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">إلغاء</Button>
                </DialogClose>
                <Button type="submit">حفظ التغييرات</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </DirectionProvider>
  )
}
