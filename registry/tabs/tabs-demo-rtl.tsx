import { Button } from "@soar-design/soar-react-components"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@soar-design/soar-react-components"

export function TabsDemoDocsRTL() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6" dir="rtl">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">الحساب</TabsTrigger>
          <TabsTrigger value="password">كلمة المرور</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>الحساب</CardTitle>
              <CardDescription>
                قم بإجراء تغييرات على حسابك هنا. انقر فوق حفظ عند الانتهاء.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">الاسم</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">اسم المستخدم</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>حفظ التغييرات</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>كلمة المرور</CardTitle>
              <CardDescription>
                قم بتغيير كلمة المرور الخاصة بك هنا. بعد الحفظ، سيتم تسجيل خروجك.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">كلمة المرور الحالية</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">كلمة المرور الجديدة</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>حفظ كلمة المرور</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

