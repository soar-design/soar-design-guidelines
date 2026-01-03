import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Input,
  Label,
} from "@soar-design/soar-react-components";

export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>إنشاء حساب</CardTitle>
        <CardDescription>أدخل معلوماتك لإنشاء حساب جديد.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">الاسم</Label>
              <Input id="name" placeholder="أحمد محمد" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input id="email" placeholder="ahmed@example.com" type="email" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">إلغاء</Button>
        <Button>إنشاء الحساب</Button>
      </CardFooter>
    </Card>
  );
}

