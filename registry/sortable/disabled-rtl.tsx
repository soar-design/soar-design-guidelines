"use client";

import { Sortable, SortableItem, SortableItemHandle } from "@soar-design/soar-react-components";
import { Lock } from "lucide-react";
import { useState } from "react";

export default function SortableDisabled() {
  const [items, setItems] = useState([
    { id: "1", name: "عنصر 1", locked: false },
    { id: "2", name: "عنصر 2 (مقفل)", locked: true },
    { id: "3", name: "عنصر 3", locked: false },
    { id: "4", name: "عنصر 4 (مقفل)", locked: true },
    { id: "5", name: "عنصر 5", locked: false },
  ]);

  return (
    <div dir="rtl">
      <Sortable
        value={items}
        onValueChange={setItems}
        getItemValue={(item) => item.id}
        className="space-y-2"
      >
        {items.map((item) => (
          <SortableItem
            key={item.id}
            value={item.id}
            disabled={item.locked}
            className="flex items-center justify-between rounded-lg border bg-card p-4 hover:bg-accent data-[disabled=false]:cursor-move"
          >
            <SortableItemHandle className="flex items-center justify-between w-full">
              <span className="font-medium">{item.name}</span>
              {item.locked && <Lock className="h-4 w-4 text-muted-foreground" />}
            </SortableItemHandle>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  );
}

