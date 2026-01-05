import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@soar-design/soar-react-components"

export function AlertDemoRTL() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>نجاح! تم حفظ التغييرات الخاصة بك</AlertTitle>
        <AlertDescription>
          هذا تنبيه يحتوي على أيقونة وعنوان ووصف.
        </AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>
          يحتوي هذا التنبيه على عنوان وأيقونة. بدون وصف.
        </AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>تعذر معالجة الدفع الخاص بك.</AlertTitle>
        <AlertDescription>
          <p>يرجى التحقق من معلومات الفوترة والمحاولة مرة أخرى.</p>
          <ul className="list-inside list-disc text-sm">
            <li>تحقق من تفاصيل بطاقتك</li>
            <li>تأكد من وجود أموال كافية</li>
            <li>تحقق من عنوان الفوترة</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}
