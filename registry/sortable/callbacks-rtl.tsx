"use client";

import { Sortable, SortableItem, SortableItemHandle } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function SortableCallbacks() {
  const [items, setItems] = useState([
    { id: "1", name: "عنصر 1" },
    { id: "2", name: "عنصر 2" },
    { id: "3", name: "عنصر 3" },
    { id: "4", name: "عنصر 4" },
  ]);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLog((prev) => [...prev.slice(-3), message]);
  };

  return (
    <div className="space-y-4" dir="rtl">
      <Sortable
        value={items}
        onValueChange={setItems}
        getItemValue={(item) => item.id}
        onDragStart={(event) => {
          addLog(`بدأ السحب: ${event.active.id}`);
        }}
        onDragEnd={(event) => {
          addLog(`انتهى السحب: ${event.active.id} إلى ${event.over?.id || "لا شيء"}`);
        }}
        className="space-y-2"
      >
        {items.map((item) => (
          <SortableItem
            key={item.id}
            value={item.id}
            className="rounded-lg border bg-card p-4 hover:bg-accent cursor-move"
          >
            <SortableItemHandle className="w-full">
              <span className="font-medium">{item.name}</span>
            </SortableItemHandle>
          </SortableItem>
        ))}
      </Sortable>

      <div className="rounded-lg border bg-muted p-4">
        <h3 className="text-sm font-medium mb-2">سجل الأحداث</h3>
        <div className="space-y-1 text-xs font-mono">
          {log.length === 0 ? (
            <p className="text-muted-foreground">لا توجد أحداث بعد. جرب سحب العناصر.</p>
          ) : (
            log.map((entry, i) => (
              <div key={i} className="text-muted-foreground">
                {entry}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

