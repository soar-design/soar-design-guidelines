"use client"

import {
  DirectionProvider,
  Label,
  Switch,
} from "@soar-design/soar-react-components"

export function SwitchDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">وضع الطيران</Label>
      </div>
    </DirectionProvider>
  )
}
