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
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

export function ItemDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Basic Item</ItemTitle>
              <ItemDescription>
                A simple item with title and description.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="secondary" size="sm">
                Action
              </Button>
            </ItemActions>
          </Item>
          <Item variant="muted" size="sm" asChild>
            <a href="#">
              <ItemMedia>
                <BadgeCheckIcon className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Your profile has been verified.</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
