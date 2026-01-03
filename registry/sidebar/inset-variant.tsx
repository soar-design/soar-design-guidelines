"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  Button,
} from "@soar-design/soar-react-components";
import { Home, LayoutDashboard, Users, BarChart3, Settings, FileText } from "lucide-react";

const items = [
  { title: "Overview", url: "#", icon: Home, active: true },
  { title: "Projects", url: "#", icon: LayoutDashboard, active: false },
  { title: "Team", url: "#", icon: Users, active: false },
  { title: "Reports", url: "#", icon: BarChart3, active: false },
  { title: "Documents", url: "#", icon: FileText, active: false },
  { title: "Settings", url: "#", icon: Settings, active: false },
];

export default function SidebarInsetVariant() {
  return (
    <div className="relative flex h-[600px] w-full overflow-hidden">
      <SidebarProvider className="min-h-0">
        <Sidebar variant="inset" className="h-full">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow">
                      <Home className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Analytics Pro</div>
                      <div className="text-xs text-muted-foreground">Enterprise</div>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.active}>
                        <a href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="px-2 py-2">
              <div className="rounded-lg bg-muted/50 p-3">
                <div className="text-xs font-medium">Need help?</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Contact our support team
                </div>
                <Button className="mt-2 w-full" size="sm">
                  Get Support
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex flex-col overflow-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Inset Variant</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 overflow-auto p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold">1,234</div>
                <div className="text-xs text-muted-foreground">Total Users</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold">$12.5k</div>
                <div className="text-xs text-muted-foreground">Revenue</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
            </div>
            <div className="rounded-lg border bg-muted/50 p-6">
              <p className="text-muted-foreground">
                Inset variant with margins and rounded corners. Both sidebar and content have rounded edges.
              </p>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
