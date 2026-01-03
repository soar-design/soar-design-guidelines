"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";

export default function TabsSizes() {
  return (
    <div className="space-y-8" dir="rtl">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">صغير جدًا</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList size="xs">
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
        <h4 className="text-sm font-medium">صغير</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList size="sm">
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
        <h4 className="text-sm font-medium">متوسط (افتراضي)</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList size="md">
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
        <h4 className="text-sm font-medium">كبير</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList size="lg">
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

