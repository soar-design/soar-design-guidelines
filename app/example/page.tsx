"use client";

import * as React from "react";
import Image from "next/image";
import {
  ChevronDown,
  Filter,
  Search,
  Sun,
  Moon,
  Monitor,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Bookmark,
  Home,
  Building,
  Building2,
  Grid3x3,
  Layers,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Field,
  FieldDescription,
  FieldSeparator,
  FieldTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  Separator,
  Slider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components";
import { useTheme } from "next-themes";
import { PropertyCard, type Property } from "./components/property-card";
import { PageHeader } from "./components/page-header";
import propertiesData from "./data/properties.json";

export default function ExamplePage() {
  const [selectedCity, setSelectedCity] = React.useState<string>("");
  const [filterStatus, setFilterStatus] = React.useState<string>("all");
  const [isFilterDialogOpen, setIsFilterDialogOpen] = React.useState(false);
  const [rangeTab, setRangeTab] = React.useState<"price" | "installment">(
    "price",
  );

  // Calculate max values for sliders
  const maxPrice = React.useMemo(() => {
    const properties = propertiesData as Property[];
    const totalPrices = properties.map((p) => {
      const monthly = p.price;
      const yearsMatch = p.paymentTerms.match(/(\d+)\s*years?/i);
      const downMatch = p.paymentTerms.match(/(\d+)%\s*down/i);
      if (yearsMatch && downMatch) {
        const years = parseInt(yearsMatch[1]);
        const downPercent = parseInt(downMatch[1]) / 100;
        const months = years * 12;
        const financedAmount = monthly * months;
        const totalPrice = financedAmount / (1 - downPercent);
        return Math.round(totalPrice);
      }
      return monthly * 100;
    });
    return Math.max(...totalPrices, 2000000); // Default to 2M if calculation fails
  }, []);

  const maxInstallment = React.useMemo(() => {
    const installments = (propertiesData as Property[]).map((p) => p.price);
    return Math.max(...installments, 20000); // Default to 20K if needed
  }, []);

  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    0, 2000000,
  ]);
  const [installmentRange, setInstallmentRange] = React.useState<
    [number, number]
  >([0, 20000]);

  // Calculate min/max for bedrooms and bathrooms
  const bedroomsRange = React.useMemo(() => {
    const bedrooms = (propertiesData as Property[]).map((p) => p.bedrooms);
    return [Math.min(...bedrooms), Math.max(...bedrooms)] as [number, number];
  }, []);

  const bathroomsRange = React.useMemo(() => {
    const bathrooms = (propertiesData as Property[]).map((p) => p.bathrooms);
    return [Math.min(...bathrooms), Math.max(...bathrooms)] as [number, number];
  }, []);

  const [selectedBedrooms, setSelectedBedrooms] = React.useState<
    ("any" | number | "7+")[]
  >(() => ["any"]);
  const [selectedBathrooms, setSelectedBathrooms] = React.useState<
    ("any" | number | "7+")[]
  >(() => ["any"]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = React.useState<
    string[]
  >(() => ["all"]);
  const [savedPropertyIds, setSavedPropertyIds] = React.useState<Set<string>>(
    new Set()
  );

  // Notifications data
  interface Notification {
    id: string;
    title: string;
    body: string;
    date: Date;
    read: boolean;
  }

  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: "1",
      title: "New Property Match",
      body: "A new property matching your criteria has been added",
      date: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      read: false,
    },
    {
      id: "2",
      title: "Price Drop Alert",
      body: "The price for Al Narjis Garden Villa has been reduced",
      date: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      read: false,
    },
    {
      id: "3",
      title: "Viewing Scheduled",
      body: "Your property viewing has been confirmed for tomorrow",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      read: true,
    },
    {
      id: "4",
      title: "Document Ready",
      body: "Your property documents are ready for review",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  // Get icon for property type
  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case "all":
        return <Grid3x3 className="size-4" />;
      case "Apartment":
        return <Building2 className="size-4" />;
      case "Villa":
        return <Home className="size-4" />;
      case "Twin House":
        return <Home className="size-4" />;
      case "Town House":
        return <Home className="size-4" />;
      case "Duplex":
        return <Building2 className="size-4" />;
      case "Penthouse":
        return <Building className="size-4" />;
      case "Chalet":
        return <Home className="size-4" />;
      case "Cabin":
        return <Home className="size-4" />;
      case "Branded Apartment":
        return <Building2 className="size-4" />;
      case "Hotel Apartment":
        return <Building className="size-4" />;
      default:
        return null;
    }
  };

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Update ranges when max values are calculated
  React.useEffect(() => {
    setPriceRange([0, maxPrice]);
    setInstallmentRange([0, maxInstallment]);
  }, [maxPrice, maxInstallment]);

  // Calculate average total price from properties
  const averagePrice = React.useMemo(() => {
    const properties = propertiesData as Property[];
    // Calculate total price from payment terms if totalPrice doesn't exist
    const totalPrices = properties.map((p) => {
      if ("totalPrice" in p && typeof (p as any).totalPrice === "number") {
        return (p as any).totalPrice;
      }
      // Estimate from payment terms: monthly * months / (1 - down payment %)
      const monthly = p.price;
      const yearsMatch = p.paymentTerms.match(/(\d+)\s*years?/i);
      const downMatch = p.paymentTerms.match(/(\d+)%\s*down/i);
      if (yearsMatch && downMatch) {
        const years = parseInt(yearsMatch[1]);
        const downPercent = parseInt(downMatch[1]) / 100;
        const months = years * 12;
        const financedAmount = monthly * months;
        const totalPrice = financedAmount / (1 - downPercent);
        return Math.round(totalPrice);
      }
      // Fallback: estimate as monthly * 100 (rough estimate)
      return monthly * 100;
    });
    const sum = totalPrices.reduce((acc, price) => acc + price, 0);
    return Math.round(sum / totalPrices.length);
  }, []);

  // Calculate average installment from properties
  const averageInstallment = React.useMemo(() => {
    const installments = (propertiesData as Property[]).map((p) => p.price);
    const sum = installments.reduce((acc, installment) => acc + installment, 0);
    return Math.round(sum / installments.length);
  }, []);

  // Calculate number of applied filters
  const appliedFiltersCount = React.useMemo(() => {
    let count = 0;
    // Check if price range is not at default values
    if (priceRange[0] !== 0 || priceRange[1] !== maxPrice) {
      count++;
    }
    // Check if installment range is not at default values
    if (installmentRange[0] !== 0 || installmentRange[1] !== maxInstallment) {
      count++;
    }
    // Check if bedrooms filter is not "any"
    if (selectedBedrooms.length !== 1 || selectedBedrooms[0] !== "any") {
      count++;
    }
    // Check if bathrooms filter is not "any"
    if (selectedBathrooms.length !== 1 || selectedBathrooms[0] !== "any") {
      count++;
    }
    // Check if property types filter is not "all"
    if (
      selectedPropertyTypes.length !== 1 ||
      selectedPropertyTypes[0] !== "all"
    ) {
      count++;
    }
    return count;
  }, [
    priceRange,
    installmentRange,
    selectedBedrooms,
    selectedBathrooms,
    selectedPropertyTypes,
    maxPrice,
    maxInstallment,
  ]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const cities = [
    {
      id: "dubai",
      name: "Dubai",
      description: "Modern metropolis with world-class infrastructure",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=64&h=64&fit=crop",
    },
    {
      id: "abu-dhabi",
      name: "Abu Dhabi",
      description: "Capital city with cultural heritage sites",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=64&h=64&fit=crop",
    },
    {
      id: "sharjah",
      name: "Sharjah",
      description: "Cultural capital of the UAE",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop",
    },
    {
      id: "ajman",
      name: "Ajman",
      description: "Smallest emirate with beautiful beaches",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=64&h=64&fit=crop",
    },
    {
      id: "ras-al-khaimah",
      name: "Ras Al Khaimah",
      description: "Mountainous emirate with natural beauty",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=64&h=64&fit=crop",
    },
    {
      id: "fujairah",
      name: "Fujairah",
      description: "Eastern emirate on the Gulf of Oman",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=64&h=64&fit=crop",
    },
    {
      id: "umm-al-quwain",
      name: "Umm Al Quwain",
      description: "Peaceful emirate with traditional charm",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=64&h=64&fit=crop",
    },
  ];

  // Filter properties based on all filters
  const filteredProperties = React.useMemo(() => {
    let properties = propertiesData as Property[];

    // Filter by status
    if (filterStatus !== "all") {
      properties = properties.filter(
        (property) => property.status === filterStatus,
      );
    }

    // Filter by price range (if not default)
    if (priceRange[0] !== 0 || priceRange[1] !== maxPrice) {
      properties = properties.filter((property) => {
        const monthly = property.price;
        const yearsMatch = property.paymentTerms.match(/(\d+)\s*years?/i);
        const downMatch = property.paymentTerms.match(/(\d+)%\s*down/i);
        if (yearsMatch && downMatch) {
          const years = parseInt(yearsMatch[1]);
          const downPercent = parseInt(downMatch[1]) / 100;
          const months = years * 12;
          const financedAmount = monthly * months;
          const totalPrice = financedAmount / (1 - downPercent);
          return totalPrice >= priceRange[0] && totalPrice <= priceRange[1];
        }
        return true;
      });
    }

    // Filter by installment range (if not default)
    if (installmentRange[0] !== 0 || installmentRange[1] !== maxInstallment) {
      properties = properties.filter(
        (property) =>
          property.price >= installmentRange[0] &&
          property.price <= installmentRange[1],
      );
    }

    // Filter by bedrooms (if not "any")
    if (selectedBedrooms.length !== 1 || selectedBedrooms[0] !== "any") {
      properties = properties.filter((property) => {
        if (selectedBedrooms.includes("7+")) {
          return (
            property.bedrooms >= 7 ||
            selectedBedrooms.includes(property.bedrooms)
          );
        }
        return selectedBedrooms.includes(property.bedrooms);
      });
    }

    // Filter by bathrooms (if not "any")
    if (selectedBathrooms.length !== 1 || selectedBathrooms[0] !== "any") {
      properties = properties.filter((property) => {
        if (selectedBathrooms.includes("7+")) {
          return (
            property.bathrooms >= 7 ||
            selectedBathrooms.includes(property.bathrooms)
          );
        }
        return selectedBathrooms.includes(property.bathrooms);
      });
    }

    // Filter by property types (if not "all")
    if (
      selectedPropertyTypes.length !== 1 ||
      selectedPropertyTypes[0] !== "all"
    ) {
      properties = properties.filter((property) =>
        selectedPropertyTypes.includes(property.type),
      );
    }

    return properties;
  }, [
    filterStatus,
    priceRange,
    installmentRange,
    selectedBedrooms,
    selectedBathrooms,
    selectedPropertyTypes,
    maxPrice,
    maxInstallment,
  ]);

  // Clear all filters
  const clearAllFilters = () => {
    setPriceRange([0, maxPrice]);
    setInstallmentRange([0, maxInstallment]);
    setSelectedBedrooms(["any"]);
    setSelectedBathrooms(["any"]);
    setSelectedPropertyTypes(["all"]);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Navbar */}
      <nav className="bg-background top-0 sticky z-50 border-b">
        <div className="px-4 h-16 gap-4 container mx-auto flex items-center justify-between">
          {/* Left side - Logo placeholder */}
          <div className="flex-shrink-0">
            <span className="text-4xl font-bold tracking-tight">Soar</span>
          </div>

          {/* Middle - Input Group */}
          <div className="max-w-xl mx-auto flex-1">
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search className="size-4" />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Separator orientation="vertical" className="h-4" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <InputGroupButton variant="ghost" size="sm">
                      {selectedCity || "Area"}
                      <ChevronDown />
                    </InputGroupButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    {cities.map((city) => (
                      <DropdownMenuItem
                        key={city.id}
                        onSelect={() => setSelectedCity(city.name)}
                      >
                        <Item variant="outline" size="sm" className="w-full border-0 p-2">
                          <ItemMedia variant="image">
                            <Image
                              src={city.image}
                              alt={city.name}
                              width={40}
                              height={40}
                              className="rounded-md object-cover"
                            />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>{city.name}</ItemTitle>
                            <ItemDescription className="text-xs">{city.description}</ItemDescription>
                          </ItemContent>
                        </Item>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setIsFilterDialogOpen(true)}
                >
                  <Filter />
                  <span className="sr-only">Filters</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Right side - Icons and User Avatar */}
          <div className="gap-2 flex flex-shrink-0 items-center">
            {/* Notifications Bell */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <Bell className="size-5" />
                  {unreadCount > 0 && (
                    <Badge
                      variant="default"
                      className="absolute -top-1 -end-1 h-5 min-w-5 flex items-center justify-center px-1 text-xs"
                    >
                      {unreadCount}
                    </Badge>
                  )}
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-96">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length === 0 ? (
                  <div className="px-2 py-6 text-center text-sm text-muted-foreground">
                    No notifications
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <DropdownMenuItem
                      key={notification.id}
                      onSelect={() => markAsRead(notification.id)}
                      className="p-0 focus:bg-transparent"
                    >
                      <Item
                        variant={notification.read ? "muted" : "outline"}
                        size="sm"
                        className="w-full border-0 p-2"
                      >
                        <ItemContent>
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <ItemTitle className={notification.read ? "" : "font-semibold"}>
                                {notification.title}
                              </ItemTitle>
                              <ItemDescription className="text-xs">
                                {notification.body}
                              </ItemDescription>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              {!notification.read && (
                                <div className="h-2 w-2 rounded-full bg-primary" />
                              )}
                              <span className="text-xs text-muted-foreground">
                                {formatDate(notification.date)}
                              </span>
                            </div>
                          </div>
                        </ItemContent>
                      </Item>
                    </DropdownMenuItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Saved Icon */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <Bookmark
                    className={`size-5 ${savedPropertyIds.size > 0
                      ? "fill-brand-primary stroke-brand-border"
                      : ""
                      }`}
                  />
                  {savedPropertyIds.size > 0 && (
                    <Badge
                      variant="default"
                      className="absolute -top-1 -end-1 h-5 min-w-5 flex items-center justify-center px-1 text-xs"
                    >
                      {savedPropertyIds.size}
                    </Badge>
                  )}
                  <span className="sr-only">Saved</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Saved</TooltipContent>
            </Tooltip>
            {/* User Avatar with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="focus:ring-ring rounded-full outline-none focus:ring-2 focus:ring-offset-2 focus:outline-none">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {/* Wallet Balance */}
                <div className="px-2 py-3">
                  <div className="text-xs text-muted-foreground mb-1">
                    Wallet Balance
                  </div>
                  <div className="text-2xl font-bold">SAR 125,000</div>
                </div>
                <DropdownMenuSeparator />
                {/* Theme Switcher */}
                {mounted && (
                  <div className="px-2 py-2">
                    <div className="gap-4 flex items-center justify-between">
                      <div className="text-sm text-foreground">Theme</div>
                      <Tabs
                        value={theme}
                        onValueChange={(value) => setTheme(value)}
                      >
                        <TabsList className="h-9 border-border px-1 rounded-full border bg-none">
                          <TabsTrigger value="light" className="rounded-full">
                            <Sun className="size-4" />
                          </TabsTrigger>
                          <TabsTrigger value="dark" className="rounded-full">
                            <Moon className="size-4" />
                          </TabsTrigger>
                          <TabsTrigger value="system" className="rounded-full">
                            <Monitor className="size-4" />
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                )}
                <DropdownMenuSeparator />
                {/* Menu Items */}
                <DropdownMenuItem>
                  <Home className="size-4" />
                  My Properties
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="size-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="size-4" />
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="size-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Filter Dialog */}
      <Dialog open={isFilterDialogOpen} onOpenChange={setIsFilterDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="gap-2 flex items-center">
              Filters
              {appliedFiltersCount > 0 && (
                <Badge
                  variant="secondary"
                  className="h-5 min-w-5 px-1.5 font-mono rounded-full tabular-nums"
                >
                  {appliedFiltersCount}
                </Badge>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Range Selection Tabs */}
            <Tabs
              value={rangeTab}
              onValueChange={(value) =>
                setRangeTab(value as "price" | "installment")
              }
            >
              <TabsList className="w-full">
                <TabsTrigger value="price" className="flex-1">
                  Price Range
                </TabsTrigger>
                <TabsTrigger value="installment" className="flex-1">
                  Installment Range
                </TabsTrigger>
              </TabsList>

              {/* Price Range Tab */}
              <TabsContent value="price" className="mt-4">
                <Field>
                  <div className="mb-2 flex items-center justify-between">
                    <FieldTitle className="text-base font-semibold">
                      Price Range
                    </FieldTitle>
                    <div className="gap-2 text-sm text-muted-foreground flex items-center">
                      <span className="font-medium text-foreground tabular-nums">
                        SAR {priceRange[0].toLocaleString()}
                      </span>
                      <span>-</span>
                      <span className="font-medium text-foreground tabular-nums">
                        SAR {priceRange[1].toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={(values) =>
                      setPriceRange(values as [number, number])
                    }
                    max={maxPrice}
                    min={0}
                    step={10000}
                    className="w-full"
                    aria-label="Price Range"
                  />
                  <FieldDescription className="mt-2">
                    The average price is SAR {averagePrice.toLocaleString()}.
                  </FieldDescription>
                </Field>
              </TabsContent>

              {/* Installment Range Tab */}
              <TabsContent value="installment" className="mt-4">
                <Field>
                  <div className="mb-2 flex items-center justify-between">
                    <FieldTitle className="text-base font-semibold">
                      Installment Range
                    </FieldTitle>
                    <div className="gap-2 text-sm text-muted-foreground flex items-center">
                      <span className="font-medium text-foreground tabular-nums">
                        SAR {installmentRange[0].toLocaleString()}
                      </span>
                      <span>-</span>
                      <span className="font-medium text-foreground tabular-nums">
                        SAR {installmentRange[1].toLocaleString()}
                      </span>
                      <span>/mo</span>
                    </div>
                  </div>
                  <Slider
                    value={installmentRange}
                    onValueChange={(values) =>
                      setInstallmentRange(values as [number, number])
                    }
                    max={maxInstallment}
                    min={0}
                    step={100}
                    className="w-full"
                    aria-label="Installment Range"
                  />
                  <FieldDescription className="mt-2">
                    The average installment is SAR{" "}
                    {averageInstallment.toLocaleString()}/mo.
                  </FieldDescription>
                </Field>
              </TabsContent>
            </Tabs>

            {/* Bedrooms and Bathrooms Section */}
            <FieldSeparator className="my-6" />
            <div className="space-y-6">
              {/* Bedrooms */}
              <Field>
                <FieldTitle className="mb-3 text-base font-semibold">
                  Bedrooms
                </FieldTitle>
                <div className="bg-accent p-1 rounded-full">
                  <div className="gap-1 flex">
                    {(["any", 1, 2, 3, 4, 5, 6, "7+"] as const).map((value) => {
                      const isSelected = selectedBedrooms.includes(value);
                      return (
                        <Toggle
                          key={value}
                          variant="outline"
                          pressed={isSelected}
                          className="flex-1"
                          onPressedChange={(pressed) => {
                            if (value === "any") {
                              setSelectedBedrooms(["any"]);
                            } else if (pressed) {
                              // Remove "any" if selecting specific values
                              const newSelection = selectedBedrooms.filter(
                                (b) => b !== "any",
                              );
                              setSelectedBedrooms([
                                ...newSelection,
                                value as number | "7+",
                              ]);
                            } else {
                              const newSelection = selectedBedrooms.filter(
                                (b) => b !== value,
                              );
                              // If no selections left, default to "any"
                              setSelectedBedrooms(
                                newSelection.length > 0 ? newSelection : ["any"],
                              );
                            }
                          }}
                        >
                          {value === "any"
                            ? "Any"
                            : value === "7+"
                              ? "7+"
                              : value}
                        </Toggle>
                      );
                    })}
                  </div>
                </div>
              </Field>

              {/* Bathrooms */}
              <Field>
                <FieldTitle className="mb-3 text-base font-semibold">
                  Bathrooms
                </FieldTitle>
                <div className="bg-accent p-1 rounded-full">
                  <div className="gap-1 flex">
                    {(["any", 1, 2, 3, 4, 5, 6, "7+"] as const).map((value) => {
                      const isSelected = selectedBathrooms.includes(value);
                      return (
                        <Toggle
                          key={value}
                          variant="outline"
                          pressed={isSelected}
                          className="flex-1"
                          onPressedChange={(pressed) => {
                            if (value === "any") {
                              setSelectedBathrooms(["any"]);
                            } else if (pressed) {
                              // Remove "any" if selecting specific values
                              const newSelection = selectedBathrooms.filter(
                                (b) => b !== "any",
                              );
                              setSelectedBathrooms([
                                ...newSelection,
                                value as number | "7+",
                              ]);
                            } else {
                              const newSelection = selectedBathrooms.filter(
                                (b) => b !== value,
                              );
                              // If no selections left, default to "any"
                              setSelectedBathrooms(
                                newSelection.length > 0 ? newSelection : ["any"],
                              );
                            }
                          }}
                        >
                          {value === "any"
                            ? "Any"
                            : value === "7+"
                              ? "7+"
                              : value}
                        </Toggle>
                      );
                    })}
                  </div>
                </div>
              </Field>

              <FieldSeparator className="my-6" />

              {/* Property Type */}
              <Field>
                <FieldTitle className="mb-3 text-base font-semibold">
                  Property Type
                </FieldTitle>
                <div className="gap-2 flex flex-wrap">
                  {(
                    [
                      "all",
                      "Apartment",
                      "Villa",
                      "Twin House",
                      "Town House",
                      "Duplex",
                      "Penthouse",
                      "Chalet",
                      "Cabin",
                      "Branded Apartment",
                      "Hotel Apartment",
                    ] as const
                  ).map((value) => {
                    const isSelected = selectedPropertyTypes.includes(value);
                    return (
                      <Toggle
                        key={value}
                        variant="outline"
                        pressed={isSelected}
                        className="gap-2 flex items-center"
                        onPressedChange={(pressed) => {
                          if (value === "all") {
                            setSelectedPropertyTypes(["all"]);
                          } else if (pressed) {
                            // Remove "all" if selecting specific types
                            const newSelection = selectedPropertyTypes.filter(
                              (t) => t !== "all",
                            );
                            setSelectedPropertyTypes([...newSelection, value]);
                          } else {
                            const newSelection = selectedPropertyTypes.filter(
                              (t) => t !== value,
                            );
                            // If no selections left, default to "all"
                            setSelectedPropertyTypes(
                              newSelection.length > 0 ? newSelection : ["all"],
                            );
                          }
                        }}
                      >
                        {getPropertyTypeIcon(value)}
                        <span>{value === "all" ? "All" : value}</span>
                      </Toggle>
                    );
                  })}
                </div>
              </Field>
            </div>
          </div>
          <DialogFooter className="flex w-full items-center justify-between">
            <Button
              variant="outline"
              onClick={clearAllFilters}
            >
              Clear all
            </Button>
            <DialogClose asChild>
              <Button>
                Show {filteredProperties.length}{" "}
                {filteredProperties.length === 1 ? "Property" : "Properties"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Main content */}
      <div className="px-4 py-8 container mx-auto">
        <PageHeader
          title="Properties"
          description="Browse our collection of premium properties"
          toolbar={
            <Tabs value={filterStatus} onValueChange={setFilterStatus}>
              <TabsList className="w-[400px]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="Ready to Move">Ready to Move</TabsTrigger>
                <TabsTrigger value="Off Plan">Off Plan</TabsTrigger>
              </TabsList>
            </Tabs>
          }
        />
        {/* Property Grid */}
        <div className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 grid w-full grid-cols-1">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isSaved={savedPropertyIds.has(property.id)}
              onSaveChange={(saved) => {
                setSavedPropertyIds((prev) => {
                  const newSet = new Set(prev);
                  if (saved) {
                    newSet.add(property.id);
                  } else {
                    newSet.delete(property.id);
                  }
                  return newSet;
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
