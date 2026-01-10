import { Button } from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";

export function TextareaWithButtonDocs() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
