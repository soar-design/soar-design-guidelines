"use client"

import {
  Button,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { toast } from "sonner"

export function SonnerDemo() {
  return (
    <DirectionProvider dir="rtl">
      <Button
        variant="outline"
        onClick={() =>
          toast("تم إنشاء الحدث", {
            description: "الأحد، 3 ديسمبر 2023 الساعة 9:00 صباحاً",
            action: {
              label: "تراجع",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        عرض الإشعار
      </Button>
    </DirectionProvider>
  )
}
