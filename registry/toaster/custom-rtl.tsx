"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterCustom() {
  return (
    <div dir="rtl">
      <Button
        variant="outline"
        onClick={() => {
          toast.custom((t) => (
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg" dir="rtl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-medium">إشعار مخصص</div>
                <div className="text-muted-foreground text-sm">هذا إشعار مخصص بالكامل</div>
              </div>
              <Button size="sm" variant="ghost" onClick={() => toast.dismiss(t)}>
                إغلاق
              </Button>
            </div>
          ));
        }}
      >
        عرض إشعار مخصص
      </Button>
    </div>
  );
}

