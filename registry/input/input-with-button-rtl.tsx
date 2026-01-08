import { Button } from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"

export function InputWithButtonDocsRTL() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2" dir="rtl">
      <Input type="email" placeholder="البريد الإلكتروني" className="max-w-sm" />
      <Button type="submit" variant="outline">
        اشتراك
      </Button>
    </div>
  )
}

