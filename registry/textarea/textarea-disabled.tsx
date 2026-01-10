import { Textarea } from "@soar-design/soar-react-components";

export function TextareaDisabledDocs() {
  return (
    <Textarea
      placeholder="Type your message here."
      disabled
      className="max-w-sm"
    />
  );
}
