import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"

export function AlertActionExample() {
  return (
    <DirectionProvider dir="rtl">
      <Alert className="w-full max-w-md">
        <AlertTitle>الوضع الداكن متاح الآن</AlertTitle>
        <AlertDescription>
          قم بتفعيله في إعدادات ملفك الشخصي للبدء.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="default">
            تفعيل
          </Button>
        </AlertAction>
      </Alert>
    </DirectionProvider>
  )
}
