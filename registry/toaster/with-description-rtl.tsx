"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterWithDescription() {
  return (
    <div dir="rtl">
      <Button
        variant="outline"
        onClick={() => {
          toast("تم إنشاء الحدث", {
            description: "الاثنين، 3 يناير الساعة 6:00 مساءً",
          });
        }}
      >
        عرض الإشعار
      </Button>
    </div>
  );
}

