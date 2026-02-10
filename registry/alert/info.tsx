import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { InfoIcon } from "lucide-react"

export function AlertInfo() {
  return (
    <DirectionProvider dir="ltr">
      <Alert variant="info" className="w-full max-w-md">
        <InfoIcon />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          We've updated our privacy policy. Please review the changes to
          understand how we handle your data.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
