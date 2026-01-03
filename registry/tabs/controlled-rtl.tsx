"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger, Button } from "@soar-design/soar-react-components";

export default function TabsControlled() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">علامة التبويب النشطة:</span>
        <code className="bg-muted px-2 py-1 rounded text-sm">{activeTab}</code>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setActiveTab("tab1")}>
          الانتقال إلى علامة التبويب 1
        </Button>
        <Button size="sm" variant="outline" onClick={() => setActiveTab("tab2")}>
          الانتقال إلى علامة التبويب 2
        </Button>
        <Button size="sm" variant="outline" onClick={() => setActiveTab("tab3")}>
          الانتقال إلى علامة التبويب 3
        </Button>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="tab1">علامة التبويب 1</TabsTrigger>
          <TabsTrigger value="tab2">علامة التبويب 2</TabsTrigger>
          <TabsTrigger value="tab3">علامة التبويب 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="space-y-2">
            <h3 className="font-medium">محتوى علامة التبويب 1</h3>
            <p className="text-sm text-muted-foreground">
              يتم التحكم في هذه العلامة بواسطة الحالة الخارجية. استخدم الأزرار أعلاه للتبديل بين العلامات.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="space-y-2">
            <h3 className="font-medium">محتوى علامة التبويب 2</h3>
            <p className="text-sm text-muted-foreground">
              يتم إدارة حالة العلامة النشطة خارجيًا ويمكن تغييرها برمجيًا.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="space-y-2">
            <h3 className="font-medium">محتوى علامة التبويب 3</h3>
            <p className="text-sm text-muted-foreground">
              يمكنك التحكم في العلامة النشطة باستخدام حالة React.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

