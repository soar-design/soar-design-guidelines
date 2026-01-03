"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";

export default function TabsVariants() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Default</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList variant="default">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Default variant content for Tab 1</TabsContent>
          <TabsContent value="tab2">Default variant content for Tab 2</TabsContent>
          <TabsContent value="tab3">Default variant content for Tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Button</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList variant="button">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Button variant content for Tab 1</TabsContent>
          <TabsContent value="tab2">Button variant content for Tab 2</TabsContent>
          <TabsContent value="tab3">Button variant content for Tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Line</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList variant="line">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Line variant content for Tab 1</TabsContent>
          <TabsContent value="tab2">Line variant content for Tab 2</TabsContent>
          <TabsContent value="tab3">Line variant content for Tab 3</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
