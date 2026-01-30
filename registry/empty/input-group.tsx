"use client"

import * as React from "react"
import {
  DirectionProvider,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
} from "@soar-design/soar-react-components"
import { SearchIcon } from "lucide-react"

export function EmptyInputGroup() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-md mx-auto">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>404 - Not Found</EmptyTitle>
            <EmptyDescription>
              The page you&apos;re looking for doesn&apos;t exist. Try searching
              for what you need below.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <InputGroup className="sm:w-3/4">
              <InputGroupInput placeholder="Try searching for pages..." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd>/</Kbd>
              </InputGroupAddon>
            </InputGroup>
            <EmptyDescription>
              Need help? <a href="#">Contact support</a>
            </EmptyDescription>
          </EmptyContent>
        </Empty>
      </div>
    </DirectionProvider>
  )
}
