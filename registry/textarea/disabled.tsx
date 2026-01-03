"use client";

import { Textarea } from "@soar-design/soar-react-components";

export default function TextareaDisabled() {
  return (
    <div className="w-96">
      <Textarea placeholder="Type your message here." disabled />
    </div>
  );
}
