"use client"

import {
  Button,
  DirectionProvider,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@soar-design/soar-react-components"

export function SheetNoCloseButton() {
  return (
    <DirectionProvider dir="ltr">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>No Close Button</SheetTitle>
            <SheetDescription>
              This sheet doesn&apos;t have a close button in the top-right corner.
              Click outside to close.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </DirectionProvider>
  )
}
