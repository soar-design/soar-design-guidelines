"use client"

import {
  DirectionProvider,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@soar-design/soar-react-components"

export function RadioGroupDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <RadioGroup defaultValue="comfortable" className="w-fit">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">افتراضي</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">مريح</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">مضغوط</Label>
          </div>
        </RadioGroup>
      </div>
    </DirectionProvider>
  )
}
