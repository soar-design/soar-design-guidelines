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
import { PlusIcon } from "lucide-react"

export function EmptyAvatarGroup() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-md mx-auto">
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
            </EmptyMedia>
            <EmptyTitle>لا يوجد أعضاء في الفريق</EmptyTitle>
            <EmptyDescription>
              ادعُ فريقك للتعاون في هذا المشروع.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">
              <PlusIcon />
              دعوة الأعضاء
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </DirectionProvider>
  )
}
