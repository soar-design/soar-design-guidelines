"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";

export default function TabsVariants() {
  return (
    <div className="space-y-8" dir="rtl">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">افتراضي</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList variant="default">
            <TabsTrigger value="tab1">علامة التبويب 1</TabsTrigger>
            <TabsTrigger value="tab2">علامة التبويب 2</TabsTrigger>
            <TabsTrigger value="tab3">علامة التبويب 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">محتوى المتغير الافتراضي لعلامة التبويب 1</TabsContent>
          <TabsContent value="tab2">محتوى المتغير الافتراضي لعلامة التبويب 2</TabsContent>
          <TabsContent value="tab3">محتوى المتغير الافتراضي لعلامة التبويب 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">زر</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList variant="button">
            <TabsTrigger value="tab1">علامة التبويب 1</TabsTrigger>
            <TabsTrigger value="tab2">علامة التبويب 2</TabsTrigger>
            <TabsTrigger value="tab3">علامة التبويب 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">محتوى متغير الزر لعلامة التبويب 1</TabsContent>
          <TabsContent value="tab2">محتوى متغير الزر لعلامة التبويب 2</TabsContent>
          <TabsContent value="tab3">محتوى متغير الزر لعلامة التبويب 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">خط</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList variant="line">
            <TabsTrigger value="tab1">علامة التبويب 1</TabsTrigger>
            <TabsTrigger value="tab2">علامة التبويب 2</TabsTrigger>
            <TabsTrigger value="tab3">علامة التبويب 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">محتوى متغير الخط لعلامة التبويب 1</TabsContent>
          <TabsContent value="tab2">محتوى متغير الخط لعلامة التبويب 2</TabsContent>
          <TabsContent value="tab3">محتوى متغير الخط لعلامة التبويب 3</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

