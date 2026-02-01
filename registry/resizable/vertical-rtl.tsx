"use client"

import {
  DirectionProvider,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@soar-design/soar-react-components"

export function ResizableVertical() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-sm rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">رأس</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">محتوى</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </DirectionProvider>
  )
}
