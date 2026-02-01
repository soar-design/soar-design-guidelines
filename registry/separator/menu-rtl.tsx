"use client"

import {
  DirectionProvider,
  Separator,
} from "@soar-design/soar-react-components"

export function SeparatorMenu() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex items-center gap-2 text-sm md:gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-medium">الإعدادات</span>
            <span className="text-muted-foreground text-xs">
              إدارة التفضيلات
            </span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-1">
            <span className="font-medium">الحساب</span>
            <span className="text-muted-foreground text-xs">
              الملف الشخصي والأمان
            </span>
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <div className="hidden flex-col gap-1 md:flex">
            <span className="font-medium">المساعدة</span>
            <span className="text-muted-foreground text-xs">الدعم والوثائق</span>
          </div>
        </div>
      </div>
    </DirectionProvider>
  )
}
