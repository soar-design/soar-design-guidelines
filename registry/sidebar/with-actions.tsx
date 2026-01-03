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
  SidebarMenuAction,
  SidebarSeparator,
  SidebarGroupAction,
  SidebarTrigger,
} from "@soar-design/soar-react-components";
import { Home, Folder, FileText, MoreHorizontal, Plus, Star } from "lucide-react";

const folders = [
  { name: "Documents", count: 23, starred: true },
  { name: "Images", count: 156, starred: false },
  { name: "Videos", count: 12, starred: false },
  { name: "Downloads", count: 45, starred: true },
];

export default function SidebarWithActions() {
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
                      <Folder className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">File Manager</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <FileText className="h-4 w-4" />
                        <span>Recent</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <div className="flex items-center justify-between px-2 py-1.5">
                <SidebarGroupLabel>Folders</SidebarGroupLabel>
                <SidebarGroupAction asChild>
                  <button>
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </SidebarGroupAction>
              </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  {folders.map((folder) => (
                    <SidebarMenuItem key={folder.name}>
                      <SidebarMenuButton asChild>
                        <a href="#">
                          <Folder className="h-4 w-4" />
                          <span className="flex-1">{folder.name}</span>
                          <span className="text-xs text-muted-foreground">{folder.count}</span>
                          {folder.starred && (
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          )}
                        </a>
                      </SidebarMenuButton>
                      <SidebarMenuAction showOnHover asChild>
                        <button>
                          <MoreHorizontal className="h-3.5 w-3.5" />
                        </button>
                      </SidebarMenuAction>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />
          </SidebarContent>

          <SidebarFooter>
            <div className="px-2 py-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>1.2 GB of 5 GB used</span>
                <button className="hover:text-foreground">Upgrade</button>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-1/4 bg-primary" />
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">My Files</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border p-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
                <div className="mt-2 text-sm font-medium">Document.pdf</div>
                <div className="text-xs text-muted-foreground">2.3 MB</div>
              </div>
              <div className="rounded-lg border p-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
                <div className="mt-2 text-sm font-medium">Report.docx</div>
                <div className="text-xs text-muted-foreground">1.1 MB</div>
              </div>
              <div className="rounded-lg border p-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
                <div className="mt-2 text-sm font-medium">Notes.txt</div>
                <div className="text-xs text-muted-foreground">45 KB</div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
