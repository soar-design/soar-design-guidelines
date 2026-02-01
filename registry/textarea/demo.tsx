"use client"

import {
  DirectionProvider,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaDemo() {
  return (
    <DirectionProvider dir="ltr">
      <Textarea placeholder="Type your message here." />
    </DirectionProvider>
  )
}
