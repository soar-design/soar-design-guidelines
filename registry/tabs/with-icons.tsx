"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@soar-design/soar-react-components";
import { User, Bell, Settings } from "lucide-react";

export default function TabsWithIcons() {
  return (
    <Tabs defaultValue="profile" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="profile">
          <User className="h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="h-4 w-4" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="h-4 w-4" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Profile Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your profile information and public visibility.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Preferences</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications and alerts.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Application Settings</h3>
          <p className="text-sm text-muted-foreground">
            Customize your application preferences and behavior.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
