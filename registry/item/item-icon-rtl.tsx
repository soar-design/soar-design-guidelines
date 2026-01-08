import { ShieldAlertIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@soar-design/soar-react-components"

export function ItemIconDocsRTL() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6" dir="rtl">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>تنبيه أمني</ItemTitle>
          <ItemDescription>
            تم اكتشاف تسجيل دخول جديد من جهاز غير معروف.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            مراجعة
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

