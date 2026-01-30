import {
  Badge,
  Button,
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function CardImage() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card className="relative w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="غلاف الحدث"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">مميز</Badge>
            </CardAction>
            <CardTitle>لقاء أنظمة التصميم</CardTitle>
            <CardDescription>
              محاضرة عملية حول واجهات برمجة التطبيقات للمكونات وإمكانية الوصول
              والإطلاق بشكل أسرع.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">عرض الحدث</Button>
          </CardFooter>
        </Card>
      </div>
    </DirectionProvider>
  )
}
