"use client"

import {
  Button,
  DirectionProvider,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Spinner,
} from "@soar-design/soar-react-components"

export function SpinnerEmpty() {
  return (
    <DirectionProvider dir="rtl">
      <Empty className="w-full">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner />
          </EmptyMedia>
          <EmptyTitle>جاري معالجة طلبك</EmptyTitle>
          <EmptyDescription>
            يرجى الانتظار بينما نقوم بمعالجة طلبك. لا تقم بتحديث الصفحة.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            إلغاء
          </Button>
        </EmptyContent>
      </Empty>
    </DirectionProvider>
  )
}
