import { Input } from "@soar-design/soar-react-components";
import { Label } from "@soar-design/soar-react-components";

export function InputWithLabelDocs() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" className="max-w-sm" />
    </div>
  );
}
