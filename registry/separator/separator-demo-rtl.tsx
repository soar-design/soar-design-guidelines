import { Separator } from "@soar-design/soar-react-components"

export function SeparatorDemoDocsRTL() {
  return (
    <div dir="rtl">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          مكتبة مكونات واجهة مستخدم مفتوحة المصدر.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>مدونة</div>
        <Separator orientation="vertical" />
        <div>وثائق</div>
        <Separator orientation="vertical" />
        <div>مصدر</div>
      </div>
    </div>
  )
}

