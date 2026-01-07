import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"

export function ButtonSizeDocsRTL() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          صغير
        </Button>
        <Button size="icon-sm" aria-label="إرسال" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">افتراضي</Button>
        <Button size="icon" aria-label="إرسال" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          كبير
        </Button>
        <Button size="icon-lg" aria-label="إرسال" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  )
}

