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
import { Home, Inbox, Calendar, FileText, BarChart, Settings } from "lucide-react";

const items = [
  { title: "Dashboard", url: "#", icon: Home },
  { title: "Messages", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Documents", url: "#", icon: FileText },
  { title: "Analytics", url: "#", icon: BarChart },
  { title: "Settings", url: "#", icon: Settings },
];

export default function SidebarFloating() {
  return (
    <div className="relative flex h-[600px] w-full overflow-hidden bg-muted/20 p-2">
      <SidebarProvider className="min-h-0">
        <Sidebar variant="floating" className="h-full rounded-lg">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm">
                      <Home className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold">Acme Corp</div>
                      <div className="text-xs text-muted-foreground">Pro Plan</div>
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
                      <SidebarMenuButton asChild>
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
              <Button className="w-full" size="sm">
                Upgrade to Enterprise
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="ms-2 bg-transparent!">
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Floating Variant</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-lg border bg-card p-8">
              <p className="text-muted-foreground">
                Floating sidebar with rounded corners, shadow, and padding around it. Perfect for modern layouts.
              </p>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
