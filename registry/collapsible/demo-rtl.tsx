"use client"

import * as React from "react"
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { ChevronsUpDown } from "lucide-react"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex w-[350px] flex-col gap-2"
        >
          <div className="flex items-center justify-between gap-4 px-4">
            <h4 className="text-sm font-semibold">الطلب #4189</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <ChevronsUpDown />
                <span className="sr-only">تبديل التفاصيل</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
            <span className="text-muted-foreground">الحالة</span>
            <span className="font-medium">تم الشحن</span>
          </div>
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-2 text-sm">
              <p className="font-medium">عنوان الشحن</p>
              <p className="text-muted-foreground">100 Market St, San Francisco</p>
            </div>
            <div className="rounded-md border px-4 py-2 text-sm">
              <p className="font-medium">العناصر</p>
              <p className="text-muted-foreground">2x سماعات الاستوديو</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </DirectionProvider>
  )
}
