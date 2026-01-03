"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterDemo() {
  return (
    <div dir="rtl">
      <Button onClick={() => toast("تم إنشاء الحدث")}>عرض الإشعار</Button>
    </div>
  );
}

