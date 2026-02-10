import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { AlertTriangleIcon } from "lucide-react"

export function AlertWarning() {
  return (
    <DirectionProvider dir="rtl">
      <Alert variant="warning" className="w-full max-w-md">
        <AlertTriangleIcon />
        <AlertTitle>تحذير</AlertTitle>
        <AlertDescription>
          ستنتهي جلستك خلال 5 دقائق. يرجى حفظ عملك لتجنب فقدان أي تغييرات.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
