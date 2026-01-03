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
  SidebarInput,
  SidebarSeparator,
  SidebarGroupAction,
  SidebarTrigger,
} from "@soar-design/soar-react-components";
import { Home, Users, Briefcase, FileText, BarChart, Settings, Search, Plus } from "lucide-react";
import { useState } from "react";

const projects = [
  { name: "Website Redesign", icon: "🎨", members: 5 },
  { name: "Mobile App", icon: "📱", members: 8 },
  { name: "API Integration", icon: "🔌", members: 3 },
];

export default function SidebarWithSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative flex h-[600px] w-full overflow-hidden bg-background">
      <SidebarProvider className="min-h-0">
        <Sidebar className="h-full">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">Workspace</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <div className="border-b p-2">
              <SidebarInput
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Users className="h-4 w-4" />
                        <span>Team</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <BarChart className="h-4 w-4" />
                        <span>Analytics</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <div className="flex items-center justify-between px-2 py-1.5">
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupAction asChild>
                  <button>
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </SidebarGroupAction>
              </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  {projects.map((project) => (
                    <SidebarMenuItem key={project.name}>
                      <SidebarMenuButton asChild>
                        <a href="#">
                          <span className="text-base">{project.icon}</span>
                          <span className="flex-1">{project.name}</span>
                          <span className="text-xs text-muted-foreground">{project.members}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />
          </SidebarContent>

          <SidebarFooter>
            <div className="px-2 py-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">With Search</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-lg border bg-muted/50 p-8">
              <p className="text-muted-foreground">
                Sidebar with built-in search functionality and project list.
              </p>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
