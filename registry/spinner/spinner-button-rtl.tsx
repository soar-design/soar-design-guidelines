import { Button } from "@soar-design/soar-react-components"
import { Spinner } from "@soar-design/soar-react-components"

export function SpinnerButtonDocsRTL() {
  return (
    <div className="flex flex-col items-center gap-4" dir="rtl">
      <Button disabled size="sm">
        <Spinner />
        جاري التحميل...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner />
        يرجى الانتظار
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner />
        جاري المعالجة
      </Button>
    </div>
  )
}

