import { ScrollArea, ScrollBar } from "@soar-design/soar-react-components";

export default function ScrollAreaBoth() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div className="p-4" style={{ width: "800px" }}>
        <h4 className="mb-4 text-sm font-medium leading-none">Large Content</h4>
        <div className="space-y-2">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="text-sm">
              This is a very long line of text that extends horizontally beyond
              the viewport {i + 1}
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

