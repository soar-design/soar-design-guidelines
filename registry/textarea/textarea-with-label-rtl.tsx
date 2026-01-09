import { Label } from "@soar-design/soar-react-components"
import { Textarea } from "@soar-design/soar-react-components"

export function TextareaWithLabelDocsRTL() {
  return (
    <div className="grid w-full max-w-sm gap-3" dir="rtl">
      <Label htmlFor="message">رسالتك</Label>
      <Textarea placeholder="اكتب رسالتك هنا." id="message" />
    </div>
  )
}

