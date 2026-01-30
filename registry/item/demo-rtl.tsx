"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@soar-design/soar-react-components"
import { BadgeCheckIcon, ChevronLeftIcon } from "lucide-react"

export function ItemDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>عنصر أساسي</ItemTitle>
              <ItemDescription>
                عنصر بسيط يحتوي على عنوان ووصف.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                إجراء
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline" size="sm" asChild>
            <a href="#">
              <ItemMedia>
                <BadgeCheckIcon className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>تم التحقق من ملفك الشخصي.</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronLeftIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
