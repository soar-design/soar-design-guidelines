import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function CardSmall() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card size="sm" className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>بطاقة صغيرة</CardTitle>
            <CardDescription>
              تستخدم هذه البطاقة متغير الحجم الصغير.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              يدعم مكون البطاقة خاصية الحجم التي يمكن تعيينها إلى
              &quot;sm&quot; للحصول على مظهر أكثر إحكامًا.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              إجراء
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DirectionProvider>
  )
}
