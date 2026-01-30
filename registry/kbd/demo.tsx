"use client"

import * as React from "react"
import {
  DirectionProvider,
  Kbd,
  KbdGroup,
} from "@soar-design/soar-react-components"

export function KbdDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex flex-col items-center gap-4">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>⌃</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>B</Kbd>
          </KbdGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}
