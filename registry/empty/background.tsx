"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@soar-design/soar-react-components"
import { Bell, RefreshCcwIcon } from "lucide-react"

export function EmptyMuted() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-md mx-auto">
        <Empty className="bg-muted/30 h-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Bell />
            </EmptyMedia>
            <EmptyTitle>No Notifications</EmptyTitle>
            <EmptyDescription className="max-w-xs text-pretty">
              You&apos;re all caught up. New notifications will appear here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline">
              <RefreshCcwIcon />
              Refresh
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </DirectionProvider>
  )
}
