"use client";

import { Textarea, Button } from "@soar-design/soar-react-components";

export default function TextareaWithButton() {
  return (
    <div className="space-y-2" dir="rtl">
      <Textarea placeholder="اكتب تعليقك..." className="min-h-[100px]" />
      <div className="flex justify-start">
        <Button>نشر التعليق</Button>
      </div>
    </div>
  );
}

