"use client";

import { Textarea, Label } from "@soar-design/soar-react-components";

export default function TextareaWithLabel() {
  return (
    <div className="space-y-2" dir="rtl">
      <Label htmlFor="message">رسالتك</Label>
      <Textarea id="message" placeholder="اكتب رسالتك هنا..." />
    </div>
  );
}

