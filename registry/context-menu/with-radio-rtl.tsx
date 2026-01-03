"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@soar-design/soar-react-components";
import { useState } from "react";

export default function ContextMenuWithRadio() {
  const [size, setSize] = useState("medium");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        انقر بزر الماوس الأيمن هنا
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>تعديل</ContextMenuItem>
        <ContextMenuItem>نسخ</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>الحجم</ContextMenuLabel>
        <ContextMenuRadioGroup value={size} onValueChange={setSize}>
          <ContextMenuRadioItem value="small">صغير</ContextMenuRadioItem>
          <ContextMenuRadioItem value="medium">متوسط</ContextMenuRadioItem>
          <ContextMenuRadioItem value="large">كبير</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}

