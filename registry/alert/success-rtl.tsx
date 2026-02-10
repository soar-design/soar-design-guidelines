import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { CheckCircle2Icon } from "lucide-react"

export function AlertSuccess() {
  return (
    <DirectionProvider dir="rtl">
      <Alert variant="success" className="w-full max-w-md">
        <CheckCircle2Icon />
        <AlertTitle>نجاح</AlertTitle>
        <AlertDescription>
          تم حفظ تغييراتك بنجاح. جميع التحديثات الآن نشطة.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
