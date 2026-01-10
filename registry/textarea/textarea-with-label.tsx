import { Label } from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";

export function TextareaWithLabelDocs() {
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
}
