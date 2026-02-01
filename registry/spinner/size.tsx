"use client"

import {
  DirectionProvider,
  Spinner,
} from "@soar-design/soar-react-components"

export function SpinnerSize() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex items-center gap-6">
        <Spinner className="size-3" />
        <Spinner className="size-4" />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </div>
    </DirectionProvider>
  )
}
