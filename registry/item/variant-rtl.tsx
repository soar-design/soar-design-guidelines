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

export function ItemVariant() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Item>
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>النمط الافتراضي</ItemTitle>
              <ItemDescription>
                خلفية شفافة بدون حدود.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>نمط المخطط</ItemTitle>
              <ItemDescription>
                نمط مخطط مع حدود مرئية.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="muted">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>النمط الخافت</ItemTitle>
              <ItemDescription>
                خلفية خافتة للمحتوى الثانوي.
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
