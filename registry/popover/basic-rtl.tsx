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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">فتح النافذة المنبثقة</Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <PopoverHeader>
              <PopoverTitle>الأبعاد</PopoverTitle>
              <PopoverDescription>
                قم بتعيين الأبعاد للطبقة.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>
    </DirectionProvider>
  )
}
