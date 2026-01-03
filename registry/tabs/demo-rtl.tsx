import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="profile" className="w-[375px] text-sm text-muted-foreground" dir="rtl">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
        <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">محتوى الملف الشخصي</TabsContent>
      <TabsContent value="notifications">محتوى الأمان</TabsContent>
    </Tabs>
  );
}

