"use client"

import {
  DirectionProvider,
  Skeleton,
} from "@soar-design/soar-react-components"

export function SkeletonAvatar() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-fit items-center gap-4">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="grid gap-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </DirectionProvider>
  )
}
