import { Button, DirectionProvider, Spinner } from "@soar-design/soar-react-components"

export function ButtonSpinner() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-lg justify-center gap-2">
        <Button variant="outline" disabled>
          <Spinner data-icon="inline-start" />
          جاري التوليد
        </Button>
        <Button variant="secondary" disabled>
          جاري التحميل
          <Spinner data-icon="inline-start" />
        </Button>
      </div>
    </DirectionProvider>
  )
}
