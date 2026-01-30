"use client"

import * as React from "react"
import {
  DirectionProvider,
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@soar-design/soar-react-components"
import { InboxIcon } from "lucide-react"

export function ItemSizeDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>الحجم الافتراضي</ItemTitle>
              <ItemDescription>
                الحجم القياسي لمعظم حالات الاستخدام.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" size="sm">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>حجم صغير</ItemTitle>
              <ItemDescription>حجم مضغوط للتخطيطات الكثيفة.</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
