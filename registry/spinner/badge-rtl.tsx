"use client"

import {
  Badge,
  DirectionProvider,
  Spinner,
} from "@soar-design/soar-react-components"

export function SpinnerBadge() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex items-center gap-4 [--radius:1.2rem]">
        <Badge>
          <Spinner data-icon="inline-start" />
          مزامنة
        </Badge>
        <Badge variant="secondary">
          <Spinner data-icon="inline-start" />
          تحديث
        </Badge>
        <Badge variant="outline">
          <Spinner data-icon="inline-start" />
          معالجة
        </Badge>
      </div>
    </DirectionProvider>
  )
}
