"use client"

import {
  DirectionProvider,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@soar-design/soar-react-components"

export function TabsLine() {
  return (
    <DirectionProvider dir="rtl">
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          <TabsTrigger value="reports">التقارير</TabsTrigger>
        </TabsList>
      </Tabs>
    </DirectionProvider>
  )
}
