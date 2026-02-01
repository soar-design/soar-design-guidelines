"use client"

import {
  DirectionProvider,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@soar-design/soar-react-components"
import { AppWindowIcon, CodeIcon } from "lucide-react"

export function TabsIcons() {
  return (
    <DirectionProvider dir="rtl">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">
            <AppWindowIcon />
            معاينة
          </TabsTrigger>
          <TabsTrigger value="code">
            <CodeIcon />
            الكود
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </DirectionProvider>
  )
}
