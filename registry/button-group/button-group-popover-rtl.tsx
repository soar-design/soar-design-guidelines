import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import { ButtonGroup } from "@soar-design/soar-react-components"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components"
import { Separator } from "@soar-design/soar-react-components"
import { Textarea } from "@soar-design/soar-react-components"

export function ButtonGroupPopoverRTL() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> مساعد
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="فتح النافذة المنبثقة">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl p-0 text-sm">
          <div className="px-4 py-3">
            <div className="text-sm font-medium">مهام الوكيل</div>
          </div>
          <Separator />
          <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <Textarea
              placeholder="اوصف مهمتك بلغة طبيعية."
              className="mb-4 resize-none"
            />
            <p className="font-medium">بدء مهمة جديدة مع المساعد</p>
            <p className="text-muted-foreground">
              اصف مهمتك بلغة طبيعية. سيعمل المساعد في الخلفية ويفتح طلب دمج
              لمراجعته.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
