"use client";

import { Switch } from "@soar-design/soar-react-components";

export default function SwitchWithDescription() {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <Switch id="notifications" defaultChecked className="mt-1" />
        <div className="grid gap-1.5">
          <label htmlFor="notifications" className="text-sm font-medium leading-none">
            Push Notifications
          </label>
          <p className="text-sm text-muted-foreground">
            Receive push notifications about important updates and messages.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <Switch id="location" className="mt-1" />
        <div className="grid gap-1.5">
          <label htmlFor="location" className="text-sm font-medium leading-none">
            Location Services
          </label>
          <p className="text-sm text-muted-foreground">
            Allow the app to access your location for personalized content.
          </p>
        </div>
      </div>
    </div>
  );
}
