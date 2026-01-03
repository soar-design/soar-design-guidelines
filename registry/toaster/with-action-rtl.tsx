"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterWithAction() {
  return (
    <div dir="rtl">
      <Button
        variant="outline"
        onClick={() => {
          toast("تم إنشاء الحدث", {
            action: {
              label: "تراجع",
              onClick: () => toast.success("تم التراجع بنجاح"),
            },
          });
        }}
      >
        عرض الإشعار
      </Button>
    </div>
  );
}

