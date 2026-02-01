"use client"

import {
  Button,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { toast } from "sonner"

export function SonnerDescription() {
  return (
    <DirectionProvider dir="rtl">
      <Button
        onClick={() =>
          toast("تم إنشاء الحدث", {
            description: "الاثنين، 3 يناير الساعة 6:00 مساءً",
          })
        }
        variant="outline"
        className="w-fit"
      >
        عرض الإشعار
      </Button>
    </DirectionProvider>
  )
}
