import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { AlertCircleIcon } from "lucide-react"

export function AlertDestructive() {
  return (
    <DirectionProvider dir="rtl">
      <Alert variant="destructive" className="w-full max-w-md">
        <AlertCircleIcon />
        <AlertTitle>فشل الدفع</AlertTitle>
        <AlertDescription>
          لم يتم معالجة دفعتك. يرجى التحقق من طريقة الدفع والمحاولة مرة أخرى.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
