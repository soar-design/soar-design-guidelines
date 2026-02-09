"use client"

import {
  DirectionProvider,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Textarea placeholder="Type your message here." className="w-full max-w-md" />
      </div>
    </DirectionProvider>
  )
}
