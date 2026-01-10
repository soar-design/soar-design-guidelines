"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
  Input,
  Avatar,
  AvatarFallback,
  Tabs,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Separator,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
  ScrollArea,
  Checkbox,
  Label,
  Badge,
} from "@soar-design/soar-react-components";
import Image from "next/image";
import {
  User,
  Settings,
  LogOut,
  HelpCircle,
  Search,
  Home,
  Wallet,
  Heart,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SearchProvider, useSearch } from "./search-context";
import { FiltersProvider, useFilters } from "./filters-context";
import { SearchFiltersDialog } from "./search-filters-dialog";

function NavigationHeader() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { searchFiltersOpen, setSearchFiltersOpen } = useFilters();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between gap-4 px-6">
      {/* Logo and Explore Properties */}
      <div className="flex items-center gap-4">
        <Link href="/example" className="flex items-center gap-3">
          <div className="flex aspect-square items-center justify-center">
            <Image
              src="/soar-logo.svg"
              alt="Soar Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
          </div>
          <span className="text-2xl leading-none font-bold tracking-tight">
            Soar
          </span>
        </Link>
        <Link
          href="/example/explore-properties"
          className={`text-sm transition-colors ${
            pathname === "/example/explore-properties"
              ? "text-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Explore Properties
        </Link>
      </div>

      {/* Search Button */}
      <div className="mx-4 max-w-md flex-1">
        <Button
          variant="outline"
          className="text-muted-foreground w-full justify-start font-normal"
          onClick={() => setSearchFiltersOpen(true)}
        >
          <Search className="me-2 h-4 w-4" />
          Search...
        </Button>
      </div>

      {/* Search & Filters Dialog */}
      <SearchFiltersDialog
        open={searchFiltersOpen}
        onOpenChange={setSearchFiltersOpen}
      />

      {/* Favorites, Properties, and User Menu */}
      <TooltipProvider>
        <div className="flex items-center gap-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/example/favorites"
                className="flex cursor-pointer items-center gap-2"
              >
                <Heart className="text-muted-foreground size-5" />
                <p className="text-lg font-medium">12</p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Favorites</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/example/my-properties"
                className="flex cursor-pointer items-center gap-2"
              >
                <Home className="text-muted-foreground size-5" />
                <p className="text-lg font-medium">8</p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>My Properties</p>
            </TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="h-6" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0">
                <Avatar className="size-12">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-0" align="end">
              <div className="space-y-4 p-4">
                {/* User Info */}
                <Link href="/example/profile" className="flex flex-col gap-0.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-semibold">John Doe</span>
                    <span className="text-muted-foreground text-sm">
                      Profile
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    john@example.com
                  </span>
                </Link>

                {/* Stats */}
                <div className="space-y-3">
                  <Link
                    href="/example/wallet"
                    className="flex cursor-pointer flex-col gap-1 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Wallet className="text-muted-foreground size-4" />
                      <p className="text-muted-foreground text-xs font-medium">
                        Wallet Balance
                      </p>
                    </div>
                    <p className="text-lg font-medium">SAR 125,000</p>
                  </Link>
                </div>
              </div>

              <DropdownMenuSeparator />

              {/* Menu Items */}
              <div className="p-2">
                <DropdownMenuItem asChild>
                  <Link href="/example/settings" className="flex items-center">
                    <Settings className="me-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/example/support" className="flex items-center">
                    <HelpCircle className="me-2 h-4 w-4" />
                    <span>Support</span>
                  </Link>
                </DropdownMenuItem>
              </div>

              <DropdownMenuSeparator />

              {/* Theme Switcher */}
              {mounted && (
                <>
                  <div className="p-2">
                    <div className="flex items-center justify-between px-2">
                      <DropdownMenuLabel className="p-0 text-sm">
                        Theme
                      </DropdownMenuLabel>
                      <Tabs value={theme} onValueChange={setTheme}>
                        <TabsList shape="pill" size="md">
                          <TabsTrigger value="light">
                            <Sun className="size-4" />
                          </TabsTrigger>
                          <TabsTrigger value="dark">
                            <Moon className="size-4" />
                          </TabsTrigger>
                          <TabsTrigger value="system">
                            <Monitor className="size-4" />
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                </>
              )}

              {/* Logout */}
              <div className="p-2">
                <DropdownMenuItem>
                  <LogOut className="me-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TooltipProvider>
    </header>
  );
}

export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
      <FiltersProvider>
        <div className="flex h-screen flex-col">
          <NavigationHeader />
          <div className="flex flex-1 flex-col overflow-auto">{children}</div>
        </div>
      </FiltersProvider>
    </SearchProvider>
  );
}
