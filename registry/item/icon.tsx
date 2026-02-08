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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-lg flex-col gap-6">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <ShieldAlertIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Security Alert</ItemTitle>
              <ItemDescription>
                New login detected from unknown device.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="secondary">
                Review
              </Button>
            </ItemActions>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
