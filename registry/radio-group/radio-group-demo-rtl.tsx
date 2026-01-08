import { Label } from "@soar-design/soar-react-components"
import {
  RadioGroup,
  RadioGroupItem,
} from "@soar-design/soar-react-components"

export function RadioGroupDemoDocsRTL() {
  return (
    <RadioGroup defaultValue="comfortable" dir="rtl">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">افتراضي</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">مريح</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">مضغوط</Label>
      </div>
    </RadioGroup>
  )
}

