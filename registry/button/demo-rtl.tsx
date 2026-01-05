import { ArrowUpIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"

export function ButtonDemoRTL() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">زر</Button>
      <Button variant="outline" size="icon" aria-label="إرسال">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
