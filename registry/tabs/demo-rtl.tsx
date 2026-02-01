"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DirectionProvider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@soar-design/soar-react-components"

export function TabsDemo() {
  return (
    <DirectionProvider dir="rtl">
      <Tabs defaultValue="overview" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          <TabsTrigger value="reports">التقارير</TabsTrigger>
          <TabsTrigger value="settings">الإعدادات</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>نظرة عامة</CardTitle>
              <CardDescription>
                عرض المقاييس الرئيسية ونشاط المشروع الأخير. تتبع التقدم عبر جميع
                مشاريعك النشطة.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              لديك 12 مشروعًا نشطًا و3 مهام معلقة.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>التحليلات</CardTitle>
              <CardDescription>
                تتبع مقاييس الأداء ومشاركة المستخدمين. راقب الاتجاهات وحدد
                فرص النمو.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              زيارات الصفحة ارتفعت بنسبة 25% مقارنة بالشهر الماضي.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>التقارير</CardTitle>
              <CardDescription>
                إنشاء وتنزيل تقاريرك التفصيلية. تصدير البيانات بصيغ متعددة
                للتحليل.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              لديك 5 تقارير جاهزة ومتاحة للتصدير.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>الإعدادات</CardTitle>
              <CardDescription>
                إدارة تفضيلات حسابك وخياراته. تخصيص تجربتك لتناسب احتياجاتك.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              تكوين الإشعارات والأمان والسمات.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DirectionProvider>
  )
}
