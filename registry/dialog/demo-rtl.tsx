"use client"

import { Button } from "@soar-design/soar-react-components"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"

export function DialogDemoRTL() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">فتح الحوار</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px]">
          <DialogHeader>
            <DialogTitle>تعديل الملف الشخصي</DialogTitle>
            <DialogDescription>
              قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">الاسم</Label>
              <Input id="name-1" name="name" defaultValue="أحمد محمد" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">اسم المستخدم</Label>
              <Input id="username-1" name="username" defaultValue="@ahmed" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">إلغاء</Button>
            </DialogClose>
            <Button type="submit">حفظ التغييرات</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

