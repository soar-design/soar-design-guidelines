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
  SidebarSeparator,
  SidebarTrigger,
  Button,
} from "@soar-design/soar-react-components";
import { Filter, Calendar, Star, Archive, SlidersHorizontal } from "lucide-react";

export default function SidebarRightSide() {
  return (
    <div className="relative flex h-[600px] w-full overflow-hidden bg-background">
      <SidebarProvider className="min-h-0">
        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <h1 className="flex-1 text-xl font-semibold">Email Inbox</h1>
            <SidebarTrigger />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="space-y-2">
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium">Meeting Tomorrow</div>
                    <div className="text-sm text-muted-foreground">
                      Don't forget about the team meeting...
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">2m ago</div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium">Project Update</div>
                    <div className="text-sm text-muted-foreground">
                      The latest changes have been deployed...
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">1h ago</div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium">Weekly Report</div>
                    <div className="text-sm text-muted-foreground">
                      Here's your weekly activity summary...
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">3h ago</div>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>

        <Sidebar side="right" className="h-full">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <Filter className="h-4 w-4" />
                    <span className="font-semibold">Filters & Actions</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Quick Filters</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Star className="h-4 w-4" />
                        <span>Starred</span>
                        <span className="ml-auto text-xs text-muted-foreground">12</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Archive className="h-4 w-4" />
                        <span>Archived</span>
                        <span className="ml-auto text-xs text-muted-foreground">45</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Labels</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span>Urgent</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <span>Work</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>Personal</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Date Range</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Calendar className="h-4 w-4" />
                        <span>Last 7 days</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="px-2 py-2">
              <Button variant="outline" className="w-full" size="sm">
                <SlidersHorizontal className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}
