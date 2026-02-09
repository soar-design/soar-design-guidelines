"use client"

import {
  Button,
  DirectionProvider,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaButton() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-md gap-2">
          <Textarea placeholder="Type your message here." />
          <Button>Send message</Button>
        </div>
      </div>
    </DirectionProvider>
  )
}
