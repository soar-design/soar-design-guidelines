import { Button } from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"

export function InputWithButtonDocs() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" className="max-w-sm" />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  )
}

