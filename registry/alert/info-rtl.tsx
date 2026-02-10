import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { InfoIcon } from "lucide-react"

export function AlertInfo() {
  return (
    <DirectionProvider dir="rtl">
      <Alert variant="info" className="w-full max-w-md">
        <InfoIcon />
        <AlertTitle>معلومات</AlertTitle>
        <AlertDescription>
          قمنا بتحديث سياسة الخصوصية الخاصة بنا. يرجى مراجعة التغييرات لفهم
          كيفية تعاملنا مع بياناتك.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
