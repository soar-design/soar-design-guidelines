import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { CheckCircle2Icon } from "lucide-react"

export function AlertBasic() {
  return (
    <DirectionProvider dir="rtl">
      <Alert className="w-full max-w-md">
        <CheckCircle2Icon />
        <AlertTitle>تم تحديث الحساب بنجاح</AlertTitle>
        <AlertDescription>
          تم حفظ معلومات ملفك الشخصي. ستظهر التغييرات فورًا.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
