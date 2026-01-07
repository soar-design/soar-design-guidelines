import { Button } from "@soar-design/soar-react-components"
import { Spinner } from "@soar-design/soar-react-components"

export function ButtonLoadingRTL() {
  return (
    <Button size="sm" variant="outline" disabled>
      <Spinner />
      إرسال
    </Button>
  )
}
