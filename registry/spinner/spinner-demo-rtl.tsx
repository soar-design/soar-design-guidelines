import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@soar-design/soar-react-components"
import { Spinner } from "@soar-design/soar-react-components"

export function SpinnerDemoDocsRTL() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]" dir="rtl">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">جارٍ معالجة الدفع...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  )
}

