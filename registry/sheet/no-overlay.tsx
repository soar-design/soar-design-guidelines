"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function SheetNoOverlay() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Without Overlay</Button>
      </SheetTrigger>
      <SheetContent overlay={false}>
        <SheetHeader>
          <SheetTitle>No Overlay</SheetTitle>
          <SheetDescription>
            This sheet doesn't have a backdrop overlay.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            You can interact with the content behind the sheet.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

