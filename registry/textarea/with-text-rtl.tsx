"use client";

import { Textarea, Label } from "@soar-design/soar-react-components";

export default function TextareaWithText() {
  return (
    <div className="space-y-2" dir="rtl">
      <Label htmlFor="bio">السيرة الذاتية</Label>
      <Textarea id="bio" placeholder="أخبرنا قليلاً عن نفسك" />
      <p className="text-sm text-muted-foreground">
        اكتب بضع جمل عن نفسك. سيتم عرض هذا في ملفك الشخصي العام.
      </p>
    </div>
  );
}

