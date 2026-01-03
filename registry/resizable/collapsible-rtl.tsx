import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@soar-design/soar-react-components";

export default function ResizableCollapsible() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
      dir="rtl"
    >
      <ResizablePanel
        defaultSize={25}
        collapsible={true}
        minSize={15}
        collapsedSize={0}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">شريط جانبي قابل للطي</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">المحتوى الرئيسي</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

