"use client";

import { Sortable, SortableItem, SortableItemHandle } from "@soar-design/soar-react-components";
import { GripVertical } from "lucide-react";
import { useState } from "react";

export default function SortableWithHandle() {
  const [items, setItems] = useState([
    { id: "1", title: "Dashboard", description: "Overview of your workspace" },
    { id: "2", title: "Projects", description: "Manage your projects" },
    { id: "3", title: "Team", description: "Collaborate with your team" },
    { id: "4", title: "Settings", description: "Configure your preferences" },
  ]);

  return (
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
          className="flex items-center gap-3 rounded-lg border bg-card p-4"
        >
          <SortableItemHandle>
            <GripVertical className="h-5 w-5 text-muted-foreground" />
          </SortableItemHandle>
          <div className="flex-1">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </SortableItem>
      ))}
    </Sortable>
  );
}

