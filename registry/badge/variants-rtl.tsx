import { Badge, DirectionProvider } from "@soar-design/soar-react-components"

export function BadgeVariants() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-lg flex-wrap justify-center gap-2">
        <Badge>افتراضي</Badge>
        <Badge variant="secondary">ثانوي</Badge>
        <Badge variant="destructive">تدميري</Badge>
        <Badge variant="outline">مخطط</Badge>
      </div>
    </DirectionProvider>
  )
}
