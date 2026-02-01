"use client"

import {
  Button,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { toast } from "sonner"

const POSITIONS = [
  { position: "top-left", label: "Top Left" },
  { position: "top-center", label: "Top Center" },
  { position: "top-right", label: "Top Right" },
  { position: "bottom-left", label: "Bottom Left" },
  { position: "bottom-center", label: "Bottom Center" },
  { position: "bottom-right", label: "Bottom Right" },
] as const

export function SonnerPosition() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex flex-wrap justify-center gap-2">
        {POSITIONS.map(({ position, label }) => (
          <Button
            key={position}
            variant="outline"
            onClick={() =>
              toast("Event has been created", { position: position as typeof position })
            }
          >
            {label}
          </Button>
        ))}
      </div>
    </DirectionProvider>
  )
}
