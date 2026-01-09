import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@soar-design/soar-react-components"

export function ResizableHandleDocsRTL() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
      dir="rtl"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">الشريط الجانبي</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">محتوى</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

