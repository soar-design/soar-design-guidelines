"use client";

import { Sortable, SortableItem, SortableItemHandle } from "@soar-design/soar-react-components";
import { GripVertical } from "lucide-react";
import { useState } from "react";

export default function SortableWithHandle() {
  const [items, setItems] = useState([
    { id: "1", title: "لوحة التحكم", description: "نظرة عامة على مساحة العمل الخاصة بك" },
    { id: "2", title: "المشاريع", description: "إدارة مشاريعك" },
    { id: "3", title: "الفريق", description: "التعاون مع فريقك" },
    { id: "4", title: "الإعدادات", description: "تكوين تفضيلاتك" },
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
    </div>
  );
}

