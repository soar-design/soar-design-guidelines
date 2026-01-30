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
    <DirectionProvider dir="ltr">
      <Alert className="w-full max-w-md">
        <AlertTitle>Dark mode is now available</AlertTitle>
        <AlertDescription>
          Enable it under your profile settings to get started.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="default">
            Enable
          </Button>
        </AlertAction>
      </Alert>
    </DirectionProvider>
  )
}
