"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@soar-design/soar-react-components"

export function EmptyAvatarDocsRTL() {
  return (
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
          هذا المستخدم غير متصل حالياً. يمكنك ترك رسالة لإشعاره أو المحاولة مرة أخرى لاحقاً.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">ترك رسالة</Button>
      </EmptyContent>
    </Empty>
  )
}
