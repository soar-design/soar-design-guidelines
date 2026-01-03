"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarTrigger,
} from "@soar-design/soar-react-components";
import { Home, Inbox, Calendar, Search, Settings, User, Bell } from "lucide-react";

const items = [
  { title: "Home", url: "#", icon: Home, badge: null },
  { title: "Inbox", url: "#", icon: Inbox, badge: "12" },
  { title: "Calendar", url: "#", icon: Calendar, badge: null },
  { title: "Search", url: "#", icon: Search, badge: null },
  { title: "Notifications", url: "#", icon: Bell, badge: "3" },
  { title: "Profile", url: "#", icon: User, badge: null },
  { title: "Settings", url: "#", icon: Settings, badge: null },
];

export default function SidebarCollapsibleIcon() {
  return (
    <div className="relative flex h-[600px] w-full overflow-hidden bg-background">
      <SidebarProvider defaultOpen={true} className="min-h-0">
        <Sidebar collapsible="icon" className="h-full">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Home className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">My App</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <a href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="px-2 py-2 text-xs text-muted-foreground">
              © 2024 My App
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Icon Collapsible Mode</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-lg border bg-muted/50 p-8">
              <p className="text-muted-foreground">
                Click the toggle to see the sidebar collapse to icon-only mode. Badges are shown as dots when collapsed.
              </p>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
