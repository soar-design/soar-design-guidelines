"use client";

import { Textarea, Label } from "@soar-design/soar-react-components";

export default function TextareaWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Your Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  );
}
