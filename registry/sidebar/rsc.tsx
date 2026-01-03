"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@soar-design/soar-react-components";
import { Folder, FolderOpen, FileCode, Database, Globe } from "lucide-react";
import { useState, useEffect } from "react";

// Simulating async data fetching
const projects = [
  { name: "Acme Website", url: "#", icon: Globe },
  { name: "Mobile App", url: "#", icon: FileCode },
  { name: "Analytics Dashboard", url: "#", icon: Database },
  { name: "Marketing Site", url: "#", icon: Globe },
  { name: "Internal Tools", url: "#", icon: FolderOpen },
];

function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

function NavProjects() {
  return (
    <SidebarMenu>
      {projects.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

export default function SidebarRsc() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-[600px] w-full max-w-4xl overflow-hidden rounded-lg border bg-background" style={{ isolation: 'isolate' }}>
      <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupContent>
                  {isLoading ? <NavProjectsSkeleton /> : <NavProjects />}
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <header className="flex h-16 items-center gap-2 border-b px-4">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Projects</h1>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-6">
              <div className="rounded-lg border bg-card p-8">
                <h2 className="text-lg font-semibold mb-2">React Server Components</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  This example demonstrates loading data with React Server Components. The sidebar shows a skeleton loader while fetching projects, then displays the actual data once loaded.
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Loading state: {isLoading ? "Active" : "Complete"}</div>
                  <div className="text-xs text-muted-foreground">
                    {isLoading 
                      ? "Simulating data fetch..." 
                      : `Loaded ${projects.length} projects successfully`}
                  </div>
                </div>
              </div>
            </main>
          </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
