"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterTypes() {
  return (
    <div className="flex flex-wrap gap-2" dir="rtl">
      <Button variant="outline" onClick={() => toast("تم إنشاء الحدث")}>
        افتراضي
      </Button>
      <Button variant="outline" onClick={() => toast.success("تم إنشاء الحدث")}>
        نجاح
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("كن في المنطقة قبل 10 دقائق من الحدث")}
      >
        معلومات
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("لا يمكن أن يكون وقت بدء الحدث قبل الساعة 8 صباحًا")}
      >
        تحذير
      </Button>
      <Button variant="outline" onClick={() => toast.error("لم يتم إنشاء الحدث")}>
        خطأ
      </Button>
    </div>
  );
}

