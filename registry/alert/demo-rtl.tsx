import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

export function AlertDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="grid w-full max-w-md items-start gap-4">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>تم الدفع بنجاح</AlertTitle>
          <AlertDescription>
            تمت معالجة دفعتك البالغة 29.99 دولارًا. تم إرسال إيصال إلى عنوان
            بريدك الإلكتروني.
          </AlertDescription>
        </Alert>
        <Alert>
          <InfoIcon />
          <AlertTitle>ميزة جديدة متاحة</AlertTitle>
          <AlertDescription>
            أضفنا دعم الوضع الداكن. يمكنك تفعيله في إعدادات حسابك.
          </AlertDescription>
        </Alert>
      </div>
    </DirectionProvider>
  )
}
