import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <ResizablePanelGroup direction="vertical" className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]" dir="rtl">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">رأس الصفحة</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">المحتوى</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

