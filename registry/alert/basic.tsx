import { Alert, AlertDescription, AlertTitle, DirectionProvider } from "@soar-design/soar-react-components"
import { CheckCircle2Icon } from "lucide-react"

export function AlertBasic() {
  return (
    <DirectionProvider dir="ltr">
      <Alert className="w-full max-w-md">
        <CheckCircle2Icon />
        <AlertTitle>Account updated successfully</AlertTitle>
        <AlertDescription>
          Your profile information has been saved. Changes will be reflected
          immediately.
        </AlertDescription>
      </Alert>
    </DirectionProvider>
  )
}
