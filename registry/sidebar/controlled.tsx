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
  SidebarTrigger,
  Button,
} from "@soar-design/soar-react-components";
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";
import { useState } from "react";

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export default function SidebarControlled() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative flex h-[600px] w-full overflow-hidden bg-background">
      <SidebarProvider open={open} onOpenChange={setOpen} className="min-h-0">
        <Sidebar className="h-full">
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
            <div className="px-2 py-2 text-sm text-muted-foreground">
              © 2024 My App
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">Controlled State</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-lg border bg-muted/50 p-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Sidebar with controlled state. The open state is managed externally and can be toggled programmatically.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Sidebar is:</span>
                  <span className="text-sm font-mono text-primary">{open ? "Open" : "Closed"}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                    Open Sidebar
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
                    Close Sidebar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
