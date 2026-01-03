"use client";

import { Switch } from "@soar-design/soar-react-components";

export default function SwitchWithDescription() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-start space-x-3 rtl:space-x-reverse">
        <Switch id="notifications" defaultChecked className="mt-1" />
        <div className="grid gap-1.5">
          <label htmlFor="notifications" className="text-sm font-medium leading-none">
            الإشعارات الفورية
          </label>
          <p className="text-sm text-muted-foreground">
            تلقي إشعارات فورية حول التحديثات والرسائل المهمة.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3 rtl:space-x-reverse">
        <Switch id="location" className="mt-1" />
        <div className="grid gap-1.5">
          <label htmlFor="location" className="text-sm font-medium leading-none">
            خدمات الموقع
          </label>
          <p className="text-sm text-muted-foreground">
            السماح للتطبيق بالوصول إلى موقعك للمحتوى المخصص.
          </p>
        </div>
      </div>
    </div>
  );
}

