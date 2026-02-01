"use client"

import {
  Button,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { toast } from "sonner"

export function SonnerTypes() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast("تم إنشاء الحدث")}>
          افتراضي
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("تم إنشاء الحدث")}
        >
          نجاح
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("كن في المنطقة قبل 10 دقائق من وقت الحدث")
          }
        >
          معلومات
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("لا يمكن أن يكون وقت بدء الحدث قبل الساعة 8 صباحاً")
          }
        >
          تحذير
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("لم يتم إنشاء الحدث")}
        >
          خطأ
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast.promise<{ name: string }>(
              () =>
                new Promise((resolve) =>
                  setTimeout(() => resolve({ name: "الحدث" }), 2000)
                ),
              {
                loading: "جاري التحميل...",
                success: (data) => `تم إنشاء ${data.name}`,
                error: "خطأ",
              }
            )
          }}
        >
          وعد
        </Button>
      </div>
    </DirectionProvider>
  )
}
