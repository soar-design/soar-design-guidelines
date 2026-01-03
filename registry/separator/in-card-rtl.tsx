import { Separator } from "@soar-design/soar-react-components";
import { Bell, CreditCard, User } from "lucide-react";

export default function SeparatorInCard() {
  return (
    <div className="w-80 rounded-lg border bg-card" dir="rtl">
      <div className="p-6">
        <h3 className="text-lg font-semibold">إعدادات الحساب</h3>
        <p className="text-sm text-muted-foreground">
          إدارة تفضيلات حسابك
        </p>
      </div>
      <Separator />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <User className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">الملف الشخصي</div>
            <div className="text-xs text-muted-foreground">
              تحديث معلوماتك الشخصية
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <Bell className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">الإشعارات</div>
            <div className="text-xs text-muted-foreground">
              إدارة تفضيلات الإشعارات
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <CreditCard className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">الفوترة</div>
            <div className="text-xs text-muted-foreground">
              عرض وإدارة معلومات الفوترة
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

