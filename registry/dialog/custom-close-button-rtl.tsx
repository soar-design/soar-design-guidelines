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

export function DialogCustomCloseButton() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">مشاركة</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>مشاركة الرابط</DialogTitle>
              <DialogDescription>
                أي شخص لديه هذا الرابط سيكون قادراً على عرض هذا.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link-custom-close-rtl" className="sr-only">
                  الرابط
                </Label>
                <Input
                  id="link-custom-close-rtl"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button">إغلاق</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DirectionProvider>
  )
}
