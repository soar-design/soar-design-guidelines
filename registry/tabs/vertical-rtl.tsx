"use client"

import {
  DirectionProvider,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@soar-design/soar-react-components"

export function TabsVertical() {
  return (
    <DirectionProvider dir="rtl">
      <Tabs defaultValue="account" orientation="vertical">
        <TabsList>
          <TabsTrigger value="account">الحساب</TabsTrigger>
          <TabsTrigger value="password">كلمة المرور</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
        </TabsList>
      </Tabs>
    </DirectionProvider>
  )
}
