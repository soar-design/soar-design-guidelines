"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterPromise() {
  const promise = () =>
    new Promise((resolve) => setTimeout(() => resolve({ name: "أحمد محمد" }), 2000));

  return (
    <div dir="rtl">
      <Button
        variant="outline"
        onClick={() => {
          toast.promise(promise, {
            loading: "جاري التحميل...",
            success: (data: any) => {
              return `تمت إضافة ${data.name}`;
            },
            error: "خطأ",
          });
        }}
      >
        عرض إشعار الوعد
      </Button>
    </div>
  );
}

