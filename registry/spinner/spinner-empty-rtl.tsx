import { Button } from "@soar-design/soar-react-components"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@soar-design/soar-react-components"
import { Spinner } from "@soar-design/soar-react-components"

export function SpinnerEmptyDocsRTL() {
  return (
    <Empty className="w-full" dir="rtl">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>جارٍ معالجة طلبك</EmptyTitle>
        <EmptyDescription>
          يرجى الانتظار بينما نقوم بمعالجة طلبك. لا تقم بتحديث الصفحة.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          إلغاء
        </Button>
      </EmptyContent>
    </Empty>
  )
}

