import { Button, DirectionProvider } from "@soar-design/soar-react-components"
import { GitBranch } from "lucide-react"

export function ButtonWithIcon() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Button variant="outline" size="sm">
          <GitBranch data-icon="inline-start" /> New Branch
        </Button>
      </div>
    </DirectionProvider>
  )
}
