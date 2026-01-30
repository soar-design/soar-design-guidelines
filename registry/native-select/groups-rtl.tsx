"use client"

import * as React from "react"
import {
  DirectionProvider,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@soar-design/soar-react-components"

export function NativeSelectGroups() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <NativeSelect>
          <NativeSelectOption value="">اختر القسم</NativeSelectOption>
          <NativeSelectOptGroup label="الهندسة">
            <NativeSelectOption value="frontend">واجهة المستخدم</NativeSelectOption>
            <NativeSelectOption value="backend">الخلفية</NativeSelectOption>
            <NativeSelectOption value="devops">DevOps</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="المبيعات">
            <NativeSelectOption value="sales-rep">مندوب مبيعات</NativeSelectOption>
            <NativeSelectOption value="account-manager">
              مدير الحسابات
            </NativeSelectOption>
            <NativeSelectOption value="sales-director">
              مدير المبيعات
            </NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="العمليات">
            <NativeSelectOption value="support">
              دعم العملاء
            </NativeSelectOption>
            <NativeSelectOption value="product-manager">
              مدير المنتج
            </NativeSelectOption>
            <NativeSelectOption value="ops-manager">
              مدير العمليات
            </NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>
    </DirectionProvider>
  )
}
