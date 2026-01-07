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

export function DialogCloseButtonRTL() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">مشاركة</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>مشاركة الرابط</DialogTitle>
          <DialogDescription>
            أي شخص لديه هذا الرابط سيكون قادراً على عرض هذا.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              الرابط
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              إغلاق
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

