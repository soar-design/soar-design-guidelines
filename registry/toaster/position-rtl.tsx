"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterPosition() {
  return (
    <div className="flex flex-wrap gap-2" dir="rtl">
      <Button
        variant="outline"
        onClick={() =>
          toast("تم إنشاء الحدث", {
            position: "top-right",
          })
        }
      >
        أعلى يمين
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("تم إنشاء الحدث", {
            position: "top-center",
          })
        }
      >
        أعلى وسط
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("تم إنشاء الحدث", {
            position: "top-left",
          })
        }
      >
        أعلى يسار
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("تم إنشاء الحدث", {
            position: "bottom-right",
          })
        }
      >
        أسفل يمين
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("تم إنشاء الحدث", {
            position: "bottom-center",
          })
        }
      >
        أسفل وسط
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("تم إنشاء الحدث", {
            position: "bottom-left",
          })
        }
      >
        أسفل يسار
      </Button>
    </div>
  );
}

