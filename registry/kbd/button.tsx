"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  Kbd,
} from "@soar-design/soar-react-components"

export function KbdButton() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Button variant="secondary">
          Accept{" "}
          <Kbd data-icon="inline-end" className="translate-x-0.5">
            ⏎
          </Kbd>
        </Button>
      </div>
    </DirectionProvider>
  )
}
