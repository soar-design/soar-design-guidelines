"use client"

import {
  Badge,
  DirectionProvider,
  Spinner,
} from "@soar-design/soar-react-components"

export function SpinnerBadge() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex items-center gap-4 [--radius:1.2rem]">
        <Badge>
          <Spinner data-icon="inline-start" />
          Syncing
        </Badge>
        <Badge variant="secondary">
          <Spinner data-icon="inline-start" />
          Updating
        </Badge>
        <Badge variant="outline">
          <Spinner data-icon="inline-start" />
          Processing
        </Badge>
      </div>
    </DirectionProvider>
  )
}
