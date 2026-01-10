import { Label } from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";

export function TextareaWithTextDocs() {
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}
