"use client"

import * as React from "react"
import {
  DirectionProvider,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@soar-design/soar-react-components"
import { ChevronLeftIcon, ExternalLinkIcon } from "lucide-react"

export function ItemLink() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-4">
          <Item variant="muted" asChild>
            <a href="#">
              <ItemContent>
                <ItemTitle>زيارة وثائقنا</ItemTitle>
                <ItemDescription>
                  تعلم كيفية البدء مع مكوناتنا.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronLeftIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
          <Item variant="muted" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>مورد خارجي</ItemTitle>
                <ItemDescription>
                  يفتح في علامة تبويب جديدة مع خصائص الأمان.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ExternalLinkIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
