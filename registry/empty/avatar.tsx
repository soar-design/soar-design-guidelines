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
    <DirectionProvider dir="ltr">
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
            <EmptyTitle>User Offline</EmptyTitle>
            <EmptyDescription>
              This user is currently offline. You can leave a message to notify
              them or try again later.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">Leave Message</Button>
          </EmptyContent>
        </Empty>
      </div>
    </DirectionProvider>
  )
}
