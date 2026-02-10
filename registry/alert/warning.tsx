import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { AlertTriangleIcon } from "lucide-react"

export function AlertWarning() {
  return (
    <DirectionProvider dir="ltr">
      <Alert variant="warning" className="w-full max-w-md">
        <AlertTriangleIcon />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your session will expire in 5 minutes. Please save your work to avoid
          losing any changes.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
