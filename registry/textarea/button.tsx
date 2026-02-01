"use client"

import {
  Button,
  DirectionProvider,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaButton() {
  return (
    <DirectionProvider dir="ltr">
      <div className="grid w-full gap-2">
        <Textarea placeholder="Type your message here." />
        <Button>Send message</Button>
      </div>
    </DirectionProvider>
  )
}
