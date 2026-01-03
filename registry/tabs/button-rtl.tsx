import { Badge } from "@soar-design/soar-react-components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";
import { Bell, UserRound } from "lucide-react";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="profile" className="w-[375px] text-sm text-muted-foreground" dir="rtl">
      <TabsList variant="button" className="grid w-full grid-cols-2">
        <TabsTrigger value="profile">
          <UserRound /> الملف الشخصي
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
      <TabsContent value="notifications">محتوى الإشعارات</TabsContent>
    </Tabs>
  );
}

