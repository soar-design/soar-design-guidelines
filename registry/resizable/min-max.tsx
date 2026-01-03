import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@soar-design/soar-react-components";

export default function ResizableMinMax() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50} minSize={30} maxSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Min 30% - Max 70%</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">No Constraints</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

