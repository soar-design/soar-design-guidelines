import { Badge, DirectionProvider } from "@soar-design/soar-react-components"

export function BadgeDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-lg flex-wrap justify-center gap-2">
        <Badge>شارة</Badge>
        <Badge variant="secondary">ثانوي</Badge>
        <Badge variant="destructive">تدميري</Badge>
        <Badge variant="outline">مخطط</Badge>
      </div>
    </DirectionProvider>
  )
}
