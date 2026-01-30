import { Badge, DirectionProvider, Spinner } from "@soar-design/soar-react-components"

export function BadgeWithSpinner() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-lg flex-wrap justify-center gap-2">
        <Badge variant="destructive">
          <Spinner data-icon="inline-start" />
          جاري الحذف
        </Badge>
        <Badge variant="secondary">
          جاري التوليد
          <Spinner data-icon="inline-end" />
        </Badge>
      </div>
    </DirectionProvider>
  )
}
