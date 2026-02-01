"use client"

import * as React from "react"
import { LoaderIcon } from "lucide-react"
import {
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export function SpinnerCustom() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex items-center gap-4">
        <Spinner />
      </div>
    </DirectionProvider>
  )
}
