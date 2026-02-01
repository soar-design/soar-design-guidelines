"use client"

import {
  DirectionProvider,
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
  Spinner,
} from "@soar-design/soar-react-components"

export function SpinnerDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
        <Item variant="muted">
          <ItemMedia>
            <Spinner />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="line-clamp-1">جاري معالجة الدفع...</ItemTitle>
          </ItemContent>
          <ItemContent className="flex-none justify-end">
            <span className="text-sm tabular-nums">$100.00</span>
          </ItemContent>
        </Item>
      </div>
    </DirectionProvider>
  )
}
