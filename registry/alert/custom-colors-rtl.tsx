import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { AlertTriangleIcon } from "lucide-react"

export function AlertColors() {
  return (
    <DirectionProvider dir="rtl">
      <Alert className="w-full max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
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
