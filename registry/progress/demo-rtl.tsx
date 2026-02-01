"use client"

import * as React from "react"
import {
  DirectionProvider,
  Progress,
} from "@soar-design/soar-react-components"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Progress value={progress} className="w-[60%]" />
      </div>
    </DirectionProvider>
  )
}
