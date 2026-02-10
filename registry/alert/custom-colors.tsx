import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { AlertTriangleIcon } from "lucide-react"

export function AlertColors() {
  return (
    <DirectionProvider dir="ltr">
      <Alert className="w-full max-w-md border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-900 dark:bg-purple-950 dark:text-purple-50">
        <AlertTriangleIcon />
        <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
        <AlertDescription>
          Renew now to avoid service interruption or upgrade to a paid plan to
          continue using the service.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
