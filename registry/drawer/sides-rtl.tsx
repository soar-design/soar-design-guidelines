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

const DRAWER_SIDES = [
  { side: "top", label: "أعلى" },
  { side: "right", label: "يمين" },
  { side: "bottom", label: "أسفل" },
  { side: "left", label: "يسار" },
] as const

export function DrawerSides() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex flex-wrap gap-2">
          {DRAWER_SIDES.map(({ side, label }) => (
            <Drawer
              key={side}
              direction={
                side === "bottom" ? undefined : (side as "top" | "right" | "left")
              }
            >
              <DrawerTrigger asChild>
                <Button variant="secondary">
                  {label}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
                <DrawerHeader>
                  <DrawerTitle>نقل الهدف</DrawerTitle>
                  <DrawerDescription>
                    حدد هدف نشاطك اليومي.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="no-scrollbar overflow-y-auto px-4">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <p
                      key={index}
                      className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  ))}
                </div>
                <DrawerFooter>
                  <Button>إرسال</Button>
                  <DrawerClose asChild>
                    <Button variant="secondary">إلغاء</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      </div>
    </DirectionProvider>
  )
}
