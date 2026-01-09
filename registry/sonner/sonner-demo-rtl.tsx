"use client"

import { toast } from "sonner"

import { Button } from "@soar-design/soar-react-components"

export function SonnerDemoDocsRTL() {
  return (
    <div dir="rtl">
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
    </div>
  )
}

