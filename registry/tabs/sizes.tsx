"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";

export default function TabsSizes() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Extra Small</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList size="xs">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
          <TabsContent value="tab3">Content for Tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Small</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList size="sm">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
          <TabsContent value="tab3">Content for Tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Medium (Default)</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList size="md">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
          <TabsContent value="tab3">Content for Tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Large</h4>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList size="lg">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
          <TabsContent value="tab3">Content for Tab 3</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
