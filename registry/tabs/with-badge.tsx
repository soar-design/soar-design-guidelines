"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger, Badge } from "@soar-design/soar-react-components";

export default function TabsWithBadge() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="all">
          All
          <Badge variant="secondary" size="xs" className="ms-2">
            12
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="unread">
          Unread
          <Badge variant="destructive" size="xs" className="ms-2">
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="archived">
          Archived
          <Badge variant="secondary" size="xs" className="ms-2">
            8
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">All Messages</h3>
          <p className="text-sm text-muted-foreground">You have 12 total messages in your inbox.</p>
        </div>
      </TabsContent>
      <TabsContent value="unread">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Unread Messages</h3>
          <p className="text-sm text-muted-foreground">
            You have 3 unread messages requiring attention.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="archived">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Archived Messages</h3>
          <p className="text-sm text-muted-foreground">You have 8 archived messages.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
