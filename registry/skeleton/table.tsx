"use client"

import {
  DirectionProvider,
  Skeleton,
} from "@soar-design/soar-react-components"

export function SkeletonTable() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex w-full max-w-sm flex-col gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="flex gap-4" key={index}>
            <Skeleton className="h-4 flex-1" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    </DirectionProvider>
  )
}
