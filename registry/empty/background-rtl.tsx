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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-md mx-auto">
        <Empty className="bg-muted/30 h-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Bell />
            </EmptyMedia>
            <EmptyTitle>لا توجد إشعارات</EmptyTitle>
            <EmptyDescription className="max-w-xs text-pretty">
              أنت محدث بالكامل. ستظهر الإشعارات الجديدة هنا.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="secondary">
              <RefreshCcwIcon />
              تحديث
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </DirectionProvider>
  )
}
