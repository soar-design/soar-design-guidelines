import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

export function AlertDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="grid w-full max-w-md items-start gap-4">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>Payment successful</AlertTitle>
          <AlertDescription>
            Your payment of $29.99 has been processed. A receipt has been sent to
            your email address.
          </AlertDescription>
        </Alert>
        <Alert>
          <InfoIcon />
          <AlertTitle>New feature available</AlertTitle>
          <AlertDescription>
            We&apos;ve added dark mode support. You can enable it in your account
            settings.
          </AlertDescription>
        </Alert>
      </div>
    </DirectionProvider>
  )
}
