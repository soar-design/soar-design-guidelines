import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { CheckCircle2Icon } from "lucide-react"

export function AlertSuccess() {
  return (
    <DirectionProvider dir="ltr">
      <Alert variant="success" className="w-full max-w-md">
        <CheckCircle2Icon />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully. All updates are now live.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
