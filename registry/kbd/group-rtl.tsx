"use client"

import * as React from "react"
import {
  DirectionProvider,
  Kbd,
  KbdGroup,
} from "@soar-design/soar-react-components"

export function KbdGroupExample() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-sm">
            استخدم{" "}
            <KbdGroup>
              <Kbd>Ctrl + B</Kbd>
              <Kbd>Ctrl + K</Kbd>
            </KbdGroup>{" "}
            لفتح لوحة الأوامر
          </p>
        </div>
      </div>
    </DirectionProvider>
  )
}
