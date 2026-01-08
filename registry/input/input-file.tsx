import { Input } from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"

export function InputFileDocs() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" className="max-w-sm" />
    </div>
  )
}

