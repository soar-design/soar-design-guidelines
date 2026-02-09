"use client"

import {
  Button,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { toast } from "sonner"

const POSITIONS = [
  { position: "top-left", label: "أعلى يسار" },
  { position: "top-center", label: "أعلى وسط" },
  { position: "top-right", label: "أعلى يمين" },
  { position: "bottom-left", label: "أسفل يسار" },
  { position: "bottom-center", label: "أسفل وسط" },
  { position: "bottom-right", label: "أسفل يمين" },
] as const

export function SonnerPosition() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-wrap justify-center gap-2">
        {POSITIONS.map(({ position, label }) => (
          <Button
            key={position}
            variant="secondary"
            onClick={() =>
              toast("تم إنشاء الحدث", { position: position as typeof position })
            }
          >
            {label}
          </Button>
        ))}
      </div>
    </DirectionProvider>
  )
}
