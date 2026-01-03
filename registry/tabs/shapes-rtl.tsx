"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";

export default function TabsShapes() {
  return (
    <div className="space-y-8" dir="rtl">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">الشكل الافتراضي</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList shape="default">
            <TabsTrigger value="tab1">علامة التبويب 1</TabsTrigger>
            <TabsTrigger value="tab2">علامة التبويب 2</TabsTrigger>
            <TabsTrigger value="tab3">علامة التبويب 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">محتوى علامة التبويب 1</TabsContent>
          <TabsContent value="tab2">محتوى علامة التبويب 2</TabsContent>
          <TabsContent value="tab3">محتوى علامة التبويب 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">شكل الحبة</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList shape="pill">
            <TabsTrigger value="tab1">علامة التبويب 1</TabsTrigger>
            <TabsTrigger value="tab2">علامة التبويب 2</TabsTrigger>
            <TabsTrigger value="tab3">علامة التبويب 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">محتوى علامة التبويب 1</TabsContent>
          <TabsContent value="tab2">محتوى علامة التبويب 2</TabsContent>
          <TabsContent value="tab3">محتوى علامة التبويب 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">شكل الحبة مع متغير الزر</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList variant="button" shape="pill">
            <TabsTrigger value="tab1">علامة التبويب 1</TabsTrigger>
            <TabsTrigger value="tab2">علامة التبويب 2</TabsTrigger>
            <TabsTrigger value="tab3">علامة التبويب 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">محتوى علامة التبويب 1</TabsContent>
          <TabsContent value="tab2">محتوى علامة التبويب 2</TabsContent>
          <TabsContent value="tab3">محتوى علامة التبويب 3</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

