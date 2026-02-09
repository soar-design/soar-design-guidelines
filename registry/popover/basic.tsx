"use client"

import {
  Button,
  DirectionProvider,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@soar-design/soar-react-components"

export function PopoverBasic() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>
                Set the dimensions for the layer.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>
    </DirectionProvider>
  )
}
