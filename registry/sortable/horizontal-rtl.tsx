"use client";

import { Sortable, SortableItem, SortableItemHandle } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function SortableHorizontal() {
  const [items, setItems] = useState([
    { id: "1", label: "الربع الأول", value: "25%" },
    { id: "2", label: "الربع الثاني", value: "40%" },
    { id: "3", label: "الربع الثالث", value: "60%" },
    { id: "4", label: "الربع الرابع", value: "85%" },
  ]);

  return (
    <div dir="rtl">
      <Sortable
        value={items}
        onValueChange={setItems}
        getItemValue={(item) => item.id}
        strategy="horizontal"
        className="flex gap-2"
      >
        {items.map((item) => (
          <SortableItem
            key={item.id}
            value={item.id}
            className="flex flex-col items-center rounded-lg border bg-card p-4 hover:bg-accent cursor-move min-w-[100px]"
          >
            <SortableItemHandle className="flex flex-col items-center w-full">
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </SortableItemHandle>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  );
}

