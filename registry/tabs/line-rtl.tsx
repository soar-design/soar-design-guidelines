import { Badge } from "@soar-design/soar-react-components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";
import { Bell, ShieldCheck, UserRound } from "lucide-react";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="profile" className="text-sm text-muted-foreground" dir="rtl">
      <TabsList variant="line">
        <TabsTrigger value="profile">
          <UserRound /> الملف الشخصي
        </TabsTrigger>
        <TabsTrigger value="security">
          <ShieldCheck /> الأمان
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell />
          الإشعارات
          <Badge variant="destructive" shape="circle" size="xs">
            5
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">محتوى الملف الشخصي</TabsContent>
      <TabsContent value="security">محتوى الأمان</TabsContent>
      <TabsContent value="notifications">محتوى الإشعارات</TabsContent>
    </Tabs>
  );
}

