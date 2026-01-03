"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
  Badge,
} from "@soar-design/soar-react-components";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "رسالة جديدة من سارة",
    description: "مرحباً! كيف حالك؟",
    time: "منذ 5 دقائق",
    unread: true,
  },
  {
    id: 2,
    title: "تم شحن طلبك",
    description: "الطلب #1234 في طريقه",
    time: "منذ ساعتين",
    unread: true,
  },
  {
    id: 3,
    title: "تم تغيير كلمة المرور بنجاح",
    description: "تم تحديث كلمة المرور الخاصة بك",
    time: "منذ يوم",
    unread: false,
  },
];

export default function SheetNotifications() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -left-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent dir="rtl">
        <SheetHeader>
          <SheetTitle>الإشعارات</SheetTitle>
          <SheetDescription>
            لديك {unreadCount} إشعار {unreadCount !== 1 ? "غير مقروء" : "غير مقروء"}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`rounded-lg border p-3 ${
                notification.unread ? "bg-muted/50" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">
                      {notification.title}
                    </p>
                    {notification.unread && (
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {notification.time}
              </p>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

