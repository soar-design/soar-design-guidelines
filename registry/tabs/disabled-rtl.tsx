"use client"

import {
  DirectionProvider,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@soar-design/soar-react-components"

export function TabsDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">الرئيسية</TabsTrigger>
          <TabsTrigger value="settings" disabled>
            معطل
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </DirectionProvider>
  )
}
