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
import { Cloud } from "lucide-react"

export function EmptyOutline() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-md mx-auto">
        <Empty className="border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Cloud />
            </EmptyMedia>
            <EmptyTitle>التخزين السحابي فارغ</EmptyTitle>
            <EmptyDescription>
              ارفع الملفات إلى التخزين السحابي الخاص بك للوصول إليها من أي مكان.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm">
              رفع الملفات
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </DirectionProvider>
  )
}
