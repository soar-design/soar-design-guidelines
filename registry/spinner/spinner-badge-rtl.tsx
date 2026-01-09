import { Badge } from "@soar-design/soar-react-components"
import { Spinner } from "@soar-design/soar-react-components"

export function SpinnerBadgeDocsRTL() {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]" dir="rtl">
      <Badge>
        <Spinner />
        مزامنة
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        تحديث
      </Badge>
      <Badge variant="outline">
        <Spinner />
        معالجة
      </Badge>
    </div>
  )
}

