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
} from "@soar-design/soar-react-components"

export function DialogStickyFooter() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">تذييل ثابت</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>تذييل ثابت</DialogTitle>
              <DialogDescription>
                يحتوي هذا الحوار على تذييل ثابت يبقى مرئياً أثناء تمرير المحتوى.
              </DialogDescription>
            </DialogHeader>
            <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-4 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">إغلاق</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DirectionProvider>
  )
}
