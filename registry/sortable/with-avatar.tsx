"use client";

import { Sortable, SortableItem, SortableItemHandle } from "@soar-design/soar-react-components";
import { Avatar } from "@soar-design/soar-react-components";
import { GripVertical, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function SortableWithAvatar() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 234 567 8901",
      avatar: "AJ",
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "+1 234 567 8902",
      avatar: "BS",
    },
    {
      id: "3",
      name: "Carol Williams",
      email: "carol@example.com",
      phone: "+1 234 567 8903",
      avatar: "CW",
    },
    {
      id: "4",
      name: "David Brown",
      email: "david@example.com",
      phone: "+1 234 567 8904",
      avatar: "DB",
    },
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
          <Avatar>
            <span className="font-medium">{item.avatar}</span>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate">{item.name}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                {item.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                {item.phone}
              </span>
            </div>
          </div>
        </SortableItem>
      ))}
    </Sortable>
  );
}

