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
import { ArrowUpRightIcon, FolderCode } from "lucide-react"

export function EmptyDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-md mx-auto">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderCode />
            </EmptyMedia>
            <EmptyTitle>لا توجد مشاريع بعد</EmptyTitle>
            <EmptyDescription>
              لم تقم بإنشاء أي مشاريع بعد. ابدأ بإنشاء مشروعك الأول.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row justify-center gap-2">
            <Button>إنشاء مشروع</Button>
            <Button variant="outline">استيراد مشروع</Button>
          </EmptyContent>
          <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
          >
            <a href="#">
              معرفة المزيد <ArrowUpRightIcon />
            </a>
          </Button>
        </Empty>
      </div>
    </DirectionProvider>
  )
}
