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
import { ShieldAlertIcon } from "lucide-react"

export function ItemIcon() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-lg flex-col gap-6">
          <Item variant="muted">
            <ItemMedia variant="icon">
              <ShieldAlertIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>تنبيه أمني</ItemTitle>
              <ItemDescription>
                تم اكتشاف تسجيل دخول جديد من جهاز غير معروف.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="secondary">
                مراجعة
              </Button>
            </ItemActions>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
