import { Input } from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"

export function InputFileDocsRTL() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3" dir="rtl">
      <Label htmlFor="picture">صورة</Label>
      <Input id="picture" type="file" className="max-w-sm" />
    </div>
  )
}

