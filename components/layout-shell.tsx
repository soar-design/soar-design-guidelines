"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  KbdGroup,
  Kbd,
  Separator,
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  Tabs,
  TabsList,
  TabsTrigger,
  Badge,
} from "@soar-design/soar-react-components";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { docsNavigation } from "@/lib/docs-navigation";
import packageJson from "@/package.json";
import Image from "next/image";
import { Footer } from "@/components/footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const activeItem = docsNavigation
    .flatMap(
      (section) =>
        section.items?.map((item) => ({
          ...item,
          section: section.title,
        })) || [],
    )
    .find((item) => item.href === pathname);

  return (
    <SidebarProvider className="border-transparent">
      <Sidebar className="border-transparent">
        <SidebarHeader className="bg-background px-3 max-lg:rounded-t-2xl">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="h-auto bg-transparent p-4 hover:bg-transparent active:bg-transparent"
                asChild
              >
                <Link href="/" className="flex flex-col items-start space-y-3">
                  <div className="flex aspect-square items-center justify-center">
                    <Image
                      src="/soar-logo.svg"
                      alt="Soar DS Logo"
                      width={32}
                      height={32}
                      className="dark:invert"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-2xl leading-none font-bold">
                      Soar
                    </span>
                    <span className="text-muted-foreground text-2xl leading-none font-bold">
                      Design
                      <br />
                      Guidelines
                    </span>
                  </div>
                  <div>
                    <Badge
                      variant="secondary"
                      className="rounded-full tabular-nums"
                    >
                      <span className="mr-1.5 h-2 w-2 rounded-full bg-current"></span>
                      v{packageJson.version} Alpha
                    </Badge>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="bg-background scrollbar-hide px-3 max-lg:rounded-b-2xl">
          <div className="from-background via-background/50 pointer-events-none sticky top-0 z-10 h-[100px] shrink-0 bg-gradient-to-b to-transparent"></div>
          <div className="-mt-[50px]">
            {docsNavigation.map((section) => (
              <SidebarGroup key={section.title}>
                <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                <SidebarMenu>
                  {section.items?.map((item) => {
                    const isActive = item.href === pathname;
                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton asChild isActive={isActive}>
                          <Link
                            href={item.href!}
                            className="flex items-center gap-2"
                          >
                            {isActive && (
                              <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                            )}
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroup>
            ))}
          </div>
          <div className="from-background via-background/50 pointer-events-none sticky bottom-0 z-10 -mt-[20px] h-[100px] shrink-0 bg-gradient-to-t to-transparent"></div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="bg-background sticky top-0 z-50">
          <div className="flex h-16 w-full items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Separator orientation="vertical" className="me-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {activeItem ? (
                    <>
                      <BreadcrumbItem className="hidden md:block">
                        {activeItem.section}
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{activeItem.title}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  ) : (
                    <BreadcrumbItem>
                      <BreadcrumbPage>Documentation</BreadcrumbPage>
                    </BreadcrumbItem>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                className="relative hidden w-full justify-between md:flex md:w-40 lg:w-64"
                onClick={() => setOpen(true)}
              >
                <span>Search documentation...</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </KbdGroup>
              </Button>

              <Separator orientation="vertical" className="h-4" />

              {mounted && (
                <Tabs value={theme} onValueChange={setTheme}>
                  <TabsList className="border-border h-9 rounded-full border bg-none! px-1">
                    <TabsTrigger value="light" className="rounded-full">
                      <Sun />
                    </TabsTrigger>
                    <TabsTrigger value="dark" className="rounded-full">
                      <Moon />
                    </TabsTrigger>
                    <TabsTrigger value="system" className="rounded-full">
                      <Monitor />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              )}
            </div>
          </div>
        </header>
        {children}
        <Footer />
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {docsNavigation.map((section) => (
              <CommandGroup key={section.title} heading={section.title}>
                {section.items?.map((item) => (
                  <CommandItem
                    key={item.href}
                    onSelect={() => {
                      if (item.href) {
                        router.push(item.href);
                        setOpen(false);
                      }
                    }}
                  >
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </CommandDialog>
      </SidebarInset>
    </SidebarProvider>
  );
}
