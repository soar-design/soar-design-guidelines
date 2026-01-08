import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@soar-design/soar-react-components"

export function ItemDemoDocsRTL() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6" dir="rtl">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>عنصر أساسي</ItemTitle>
          <ItemDescription>
            عنصر بسيط يحتوي على عنوان ووصف.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            إجراء
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>تم التحقق من ملفك الشخصي.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}

