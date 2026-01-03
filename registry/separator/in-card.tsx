import { Separator } from "@soar-design/soar-react-components";
import { Bell, CreditCard, User } from "lucide-react";

export default function SeparatorInCard() {
  return (
    <div className="w-80 rounded-lg border bg-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account preferences
        </p>
      </div>
      <Separator />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <User className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Profile</div>
            <div className="text-xs text-muted-foreground">
              Update your personal information
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <Bell className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Notifications</div>
            <div className="text-xs text-muted-foreground">
              Manage notification preferences
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <CreditCard className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Billing</div>
            <div className="text-xs text-muted-foreground">
              View and manage billing information
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

