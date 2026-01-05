"use client"

import { Bell, RefreshCcw } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@soar-design/soar-react-components"

export function EmptyMutedRTL() {
  return (
    <Empty className="h-full bg-gradient-to-b from-muted/50 from-30% to-background">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bell />
        </EmptyMedia>
        <EmptyTitle>لا توجد إشعارات</EmptyTitle>
        <EmptyDescription>
          أنت محدث بالكامل. ستظهر الإشعارات الجديدة هنا.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <RefreshCcw />
          تحديث
        </Button>
      </EmptyContent>
    </Empty>
  )
}
