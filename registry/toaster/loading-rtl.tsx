"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterLoading() {
  return (
    <div dir="rtl">
      <Button
        variant="outline"
        onClick={() => {
          const id = toast.loading("جاري تحميل البيانات...");
          setTimeout(() => {
            toast.success("تم تحميل البيانات بنجاح!", { id });
          }, 2000);
        }}
      >
        عرض إشعار التحميل
      </Button>
    </div>
  );
}

