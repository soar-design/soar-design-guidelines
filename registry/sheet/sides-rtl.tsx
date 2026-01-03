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

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

const sideLabels: Record<SheetSide, string> = {
  top: "أعلى",
  right: "يمين",
  bottom: "أسفل",
  left: "يسار",
};

export default function SheetSides() {
  return (
    <div className="grid grid-cols-2 gap-2" dir="rtl">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">
              {sideLabels[side]}
            </Button>
          </SheetTrigger>
          <SheetContent side={side} dir="rtl">
            <SheetHeader>
              <SheetTitle>لوحة من {sideLabels[side]}</SheetTitle>
              <SheetDescription>
                هذه اللوحة تنزلق من {sideLabels[side]}.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                المحتوى ينزلق من الجانب {sideLabels[side]} من الشاشة.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

