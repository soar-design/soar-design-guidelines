import { Input } from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"

export function InputWithLabelDocsRTL() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3" dir="rtl">
      <Label htmlFor="email">البريد الإلكتروني</Label>
      <Input type="email" id="email" placeholder="البريد الإلكتروني" className="max-w-sm" />
    </div>
  )
}

