import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { AlertTriangleIcon } from "lucide-react"

export function AlertColors() {
  return (
    <DirectionProvider dir="rtl">
      <Alert className="w-full max-w-md border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-900 dark:bg-purple-950 dark:text-purple-50">
        <AlertTriangleIcon />
        <AlertTitle>سينتهي اشتراكك خلال 3 أيام.</AlertTitle>
        <AlertDescription>
          قم بالتجديد الآن لتجنب انقطاع الخدمة أو قم بالترقية إلى خطة مدفوعة
          لمتابعة استخدام الخدمة.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
