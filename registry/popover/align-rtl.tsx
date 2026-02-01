"use client"

import {
  Button,
  DirectionProvider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components"

export function PopoverAlign() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex gap-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                البداية
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-40">
              محاذاة إلى البداية
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                الوسط
              </Button>
            </PopoverTrigger>
            <PopoverContent align="center" className="w-40">
              محاذاة إلى الوسط
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                النهاية
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-40">
              محاذاة إلى النهاية
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </DirectionProvider>
  )
}
