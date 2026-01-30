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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Size</ItemTitle>
              <ItemDescription>
                The standard size for most use cases.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline" size="sm">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Small Size</ItemTitle>
              <ItemDescription>A compact size for dense layouts.</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
