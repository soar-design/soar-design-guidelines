"use client"

import * as React from "react"
import {
  DirectionProvider,
  Kbd,
  KbdGroup,
} from "@soar-design/soar-react-components"

export function KbdGroupExample() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Use{" "}
            <KbdGroup>
              <Kbd>Ctrl + B</Kbd>
              <Kbd>Ctrl + K</Kbd>
            </KbdGroup>{" "}
            to open the command palette
          </p>
        </div>
      </div>
    </DirectionProvider>
  )
}
