"use client"

import * as React from "react"
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function DialogNoCloseButton() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">No Close Button</Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>No Close Button</DialogTitle>
              <DialogDescription>
                This dialog doesn&apos;t have a close button in the top-right
                corner.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </DirectionProvider>
  )
}
