import { Checkbox } from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"

export function LabelDemoDocsRTL() {
  return (
    <div dir="rtl">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">قبول الشروط والأحكام</Label>
      </div>
    </div>
  )
}

