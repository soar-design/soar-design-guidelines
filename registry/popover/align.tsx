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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex gap-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" size="sm">
                Start
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-40">
              Aligned to start
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" size="sm">
                Center
              </Button>
            </PopoverTrigger>
            <PopoverContent align="center" className="w-40">
              Aligned to center
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" size="sm">
                End
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-40">
              Aligned to end
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </DirectionProvider>
  )
}
