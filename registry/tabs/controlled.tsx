"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger, Button } from "@soar-design/soar-react-components";

export default function TabsControlled() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Active tab:</span>
        <code className="bg-muted px-2 py-1 rounded text-sm">{activeTab}</code>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setActiveTab("tab1")}>
          Go to Tab 1
        </Button>
        <Button size="sm" variant="outline" onClick={() => setActiveTab("tab2")}>
          Go to Tab 2
        </Button>
        <Button size="sm" variant="outline" onClick={() => setActiveTab("tab3")}>
          Go to Tab 3
        </Button>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="space-y-2">
            <h3 className="font-medium">Tab 1 Content</h3>
            <p className="text-sm text-muted-foreground">
              This tab is controlled by external state. Use the buttons above to switch tabs.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="space-y-2">
            <h3 className="font-medium">Tab 2 Content</h3>
            <p className="text-sm text-muted-foreground">
              The active tab state is managed externally and can be changed programmatically.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="space-y-2">
            <h3 className="font-medium">Tab 3 Content</h3>
            <p className="text-sm text-muted-foreground">
              You can control which tab is active using React state.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
