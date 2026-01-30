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
} from "@soar-design/soar-react-components"

export function DialogNoCloseButton() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">بدون زر إغلاق</Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>بدون زر إغلاق</DialogTitle>
              <DialogDescription>
                هذا الحوار لا يحتوي على زر إغلاق في الزاوية العلوية اليمنى.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </DirectionProvider>
  )
}
