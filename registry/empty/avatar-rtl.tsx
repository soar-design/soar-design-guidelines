"use client"

import * as React from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DirectionProvider,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@soar-design/soar-react-components"

export function EmptyAvatar() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-md mx-auto">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="grayscale"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </EmptyMedia>
            <EmptyTitle>المستخدم غير متصل</EmptyTitle>
            <EmptyDescription>
              هذا المستخدم غير متصل حالياً. يمكنك ترك رسالة لإشعاره أو المحاولة
              مرة أخرى لاحقاً.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">ترك رسالة</Button>
          </EmptyContent>
        </Empty>
      </div>
    </DirectionProvider>
  )
}
