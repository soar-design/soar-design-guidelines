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
    title: "New message from Sarah",
    description: "Hey! How are you doing?",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Your order has shipped",
    description: "Order #1234 is on its way",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 3,
    title: "Password changed successfully",
    description: "Your password was updated",
    time: "1 day ago",
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
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            You have {unreadCount} unread notification
            {unreadCount !== 1 ? "s" : ""}
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

