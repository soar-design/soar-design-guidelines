"use client";

import { Sortable, SortableItem, SortableItemHandle } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function SortableCallbacks() {
  const [items, setItems] = useState([
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    { id: "4", name: "Item 4" },
  ]);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLog((prev) => [...prev.slice(-3), message]);
  };

  return (
    <div className="space-y-4">
      <Sortable
        value={items}
        onValueChange={setItems}
        getItemValue={(item) => item.id}
        onDragStart={(event) => {
          addLog(`Started dragging: ${event.active.id}`);
        }}
        onDragEnd={(event) => {
          addLog(`Finished dragging: ${event.active.id} to ${event.over?.id || "none"}`);
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
        <h3 className="text-sm font-medium mb-2">Event Log</h3>
        <div className="space-y-1 text-xs font-mono">
          {log.length === 0 ? (
            <p className="text-muted-foreground">No events yet. Try dragging items.</p>
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

