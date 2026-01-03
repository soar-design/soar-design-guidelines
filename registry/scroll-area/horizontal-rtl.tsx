import { ScrollArea, ScrollBar } from "@soar-design/soar-react-components";

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border" dir="rtl">
      <div className="flex w-max space-x-4 rtl:space-x-reverse p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-[150px] w-[200px] shrink-0 rounded-md bg-muted"
          >
            <div className="flex h-full items-center justify-center">
              <span className="text-sm font-medium">عنصر {i + 1}</span>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

