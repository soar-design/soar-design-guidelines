"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@soar-design/soar-react-components"

export function DrawerScrollableContent() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button variant="outline">محتوى قابل للتمرير</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>نقل الهدف</DrawerTitle>
              <DrawerDescription>حدد هدف نشاطك اليومي.</DrawerDescription>
            </DrawerHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p
                  key={index}
                  className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
                >
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
            <DrawerFooter>
              <Button>إرسال</Button>
              <DrawerClose asChild>
                <Button variant="outline">إلغاء</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </DirectionProvider>
  )
}
