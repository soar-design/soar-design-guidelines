"use client"

import {
  DirectionProvider,
  Separator,
} from "@soar-design/soar-react-components"

export function SeparatorVertical() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex h-5 items-center gap-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </DirectionProvider>
  )
}
