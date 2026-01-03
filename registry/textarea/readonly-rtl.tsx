"use client";

import { Textarea } from "@soar-design/soar-react-components";

export default function TextareaReadonly() {
  return (
    <div className="w-96" dir="rtl">
      <Textarea placeholder="اكتب رسالتك هنا." readOnly={true} />
    </div>
  );
}

