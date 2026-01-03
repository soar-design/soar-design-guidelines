import { Tabs, TabsList, TabsTrigger } from "@soar-design/soar-react-components";
import { Bell, ShieldCheck, UserRound } from "lucide-react";

export default function TabsDemo() {
  return (
    <div className="flex flex-col items-center gap-8" dir="rtl">
      <Tabs defaultValue="profile" className="text-sm text-muted-foreground">
        <TabsList size="sm">
          <TabsTrigger value="profile">
            <UserRound /> الملف الشخصي
          </TabsTrigger>
          <TabsTrigger value="security">
            <ShieldCheck /> الأمان
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell /> الإشعارات
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="profile" className="text-sm text-muted-foreground">
        <TabsList size="sm" variant="button">
          <TabsTrigger value="profile">
            <UserRound /> الملف الشخصي
          </TabsTrigger>
          <TabsTrigger value="security">
            <ShieldCheck /> الأمان
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell /> الإشعارات
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="profile" className="text-sm text-muted-foreground">
        <TabsList size="sm" variant="line">
          <TabsTrigger value="profile">
            <UserRound /> الملف الشخصي
          </TabsTrigger>
          <TabsTrigger value="security">
            <ShieldCheck /> الأمان
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell /> الإشعارات
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

