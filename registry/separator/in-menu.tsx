import { Separator } from "@soar-design/soar-react-components";
import { Home, Settings, User, LogOut } from "lucide-react";

export default function SeparatorInMenu() {
  return (
    <div className="w-64 rounded-md border bg-card p-2">
      <div className="space-y-1">
        <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
          <User className="h-4 w-4" />
          <span>Profile</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
      </div>
      <Separator className="my-2" />
      <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-destructive hover:bg-accent">
        <LogOut className="h-4 w-4" />
        <span>Log out</span>
      </button>
    </div>
  );
}

