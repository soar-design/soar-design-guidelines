import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@soar-design/soar-react-components";

export default function CardVariants() {
  return (
    <div className="flex flex-col gap-4">
      <Card variant="default" className="w-[350px]">
        <CardHeader>
          <CardTitle>المتغير الافتراضي</CardTitle>
          <CardDescription>هذا هو نمط البطاقة الافتراضي.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            يوفر المتغير الافتراضي مظهرًا نظيفًا وبسيطًا مناسبًا لمعظم حالات الاستخدام.
          </p>
        </CardContent>
      </Card>

      <Card variant="accent" className="w-[350px]">
        <CardHeader>
          <CardTitle>متغير التمييز</CardTitle>
          <CardDescription>هذا هو نمط بطاقة التمييز.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            يضيف متغير التمييز تأكيدًا بصريًا لإبراز المحتوى المهم.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

