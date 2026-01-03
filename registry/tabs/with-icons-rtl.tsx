"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";
import { User, Bell, Settings } from "lucide-react";

export default function TabsWithIcons() {
  return (
    <Tabs defaultValue="profile" className="w-full max-w-md" dir="rtl">
      <TabsList>
        <TabsTrigger value="profile">
          <User className="h-4 w-4" />
          الملف الشخصي
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="h-4 w-4" />
          الإشعارات
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="h-4 w-4" />
          الإعدادات
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">إعدادات الملف الشخصي</h3>
          <p className="text-sm text-muted-foreground">
            إدارة معلومات ملفك الشخصي والظهور العام.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">تفضيلات الإشعارات</h3>
          <p className="text-sm text-muted-foreground">
            تكوين كيفية استقبال الإشعارات والتنبيهات.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">إعدادات التطبيق</h3>
          <p className="text-sm text-muted-foreground">
            تخصيص تفضيلات التطبيق وسلوكه.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}

