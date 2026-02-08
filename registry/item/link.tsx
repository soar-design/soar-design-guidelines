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
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

export function ItemLink() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-4">
          <Item variant="muted" asChild>
            <a href="#">
              <ItemContent>
                <ItemTitle>Visit our documentation</ItemTitle>
                <ItemDescription>
                  Learn how to get started with our components.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
          <Item variant="muted" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>External resource</ItemTitle>
                <ItemDescription>
                  Opens in a new tab with security attributes.
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
