import { Button } from "@soar-design/soar-react-components";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@soar-design/soar-react-components";
import { Input } from "@soar-design/soar-react-components";
import { Label } from "@soar-design/soar-react-components";

export function CardDemoDocsRTL() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>تسجيل الدخول إلى حسابك</CardTitle>
        <CardDescription>
          أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك
        </CardDescription>
        <CardAction>
          <Button variant="link">إنشاء حساب</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">كلمة المرور</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  نسيت كلمة المرور؟
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          تسجيل الدخول
        </Button>
        <Button variant="outline" className="w-full">
          تسجيل الدخول باستخدام Google
        </Button>
      </CardFooter>
    </Card>
  );
}
