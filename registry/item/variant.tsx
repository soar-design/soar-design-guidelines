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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Item>
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Variant</ItemTitle>
              <ItemDescription>
                Transparent background with no border.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Outline Variant</ItemTitle>
              <ItemDescription>
                Outlined style with a visible border.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="muted">
            <ItemMedia variant="icon">
              <InboxIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Muted Variant</ItemTitle>
              <ItemDescription>
                Muted background for secondary content.
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
