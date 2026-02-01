"use client"

import {
  Card,
  CardContent,
  CardHeader,
  DirectionProvider,
  Skeleton,
} from "@soar-design/soar-react-components"

export function SkeletonCard() {
  return (
    <DirectionProvider dir="ltr">
      <Card className="w-full max-w-xs">
        <CardHeader>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="aspect-video w-full" />
        </CardContent>
      </Card>
    </DirectionProvider>
  )
}
