"use client"

import * as React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Tabs, TabsList, TabsTrigger } from "@soar-design/soar-react-components"
import { Badge } from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"
import { AspectRatio } from "@soar-design/soar-react-components"
import { Separator } from "@soar-design/soar-react-components"
import { Avatar, AvatarFallback, AvatarImage } from "@soar-design/soar-react-components"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@soar-design/soar-react-components"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@soar-design/soar-react-components"
import {
    DirectionProvider,
} from "@soar-design/soar-react-components"
import {
    Star,
    Bookmark,
    BedDouble,
    Bath,
    MapPin,
    Home,
    Map,
    EllipsisVertical,
    Eye,
    Share2,
    Languages,
    Sun,
    Moon,
    Monitor,
} from "lucide-react"
import propertiesData from "../data/properties.json"

interface Property {
    id: number
    name: string
    address: string
    beds: number
    baths: number
    area: string
    type: string
    plan: string
    developer: string
    price: string
    priceUnit: string
    terms: string
    isRecentlyAdded: boolean
    image?: string
    images?: string[]
    companyAvatar?: string
}

interface DropdownMenuItem {
    label: string
    icon: React.ElementType
}

// Transform JSON data to match Property interface
// This will be transformed with translations in the component
const PROPERTIES: Property[] = propertiesData.map((property) => {
    // Get the first image (either from image or images array)
    const firstImage = property.image || (property.images && property.images[0]) || "https://ui.shadcn.com/placeholder.svg"

    return {
        id: parseInt(property.id),
        name: property.name,
        address: property.location,
        beds: property.bedrooms,
        baths: property.bathrooms,
        area: property.area.toString(), // Store as number string, will add unit with translation
        type: property.type,
        plan: property.status,
        developer: property.companyName,
        price: property.price.toLocaleString(),
        priceUnit: "SAR/month",
        terms: property.paymentTerms,
        isRecentlyAdded: property.isRecentlyAdded || false,
        image: firstImage,
        images: property.images || (property.image ? [property.image] : []),
        companyAvatar: property.companyAvatar,
    }
})

const DROPDOWN_MENU_ITEMS: DropdownMenuItem[] = [
    { label: "View Details", icon: Eye },
    { label: "Share", icon: Share2 },
]

const translations = {
    en: {
        title: "All Properties",
        tabs: {
            all: "All",
            ready: "Ready",
            offplan: "Off Plan",
        },
        recentlyAdded: "Recently Added",
        bookmark: "Bookmark",
        viewDetails: "View Details",
        share: "Share",
        openMenu: "Open menu",
        priceUnit: "SAR/month",
        areaUnit: "sqm",
        plan: {
            "Ready to Move": "Ready to Move",
            "Off Plan": "Off Plan",
        },
        propertyType: {
            Villa: "Villa",
            Townhouse: "Townhouse",
            Apartment: "Apartment",
            Penthouse: "Penthouse",
            Duplex: "Duplex",
        },
        language: {
            english: "English",
            arabic: "العربية",
        },
        theme: {
            light: "Light",
            dark: "Dark",
            system: "System",
        },
        paymentTerms: {
            "With 30% down payment over 5 years": "With 30% down payment over 5 years",
            "With 20% down payment over 7 years": "With 20% down payment over 7 years",
            "With 25% down payment over 4 years": "With 25% down payment over 4 years",
            "With 35% down payment over 6 years": "With 35% down payment over 6 years",
            "With 30% down payment over 4 years": "With 30% down payment over 4 years",
            "With 20% down payment over 3 years": "With 20% down payment over 3 years",
            "With 25% down payment over 6 years": "With 25% down payment over 6 years",
        },
    },
    ar: {
        title: "جميع العقارات",
        tabs: {
            all: "الكل",
            ready: "جاهز",
            offplan: "قيد الإنشاء",
        },
        recentlyAdded: "مضاف حديثاً",
        bookmark: "حفظ",
        viewDetails: "عرض التفاصيل",
        share: "مشاركة",
        openMenu: "فتح القائمة",
        priceUnit: "ريال/شهر",
        areaUnit: "م²",
        plan: {
            "Ready to Move": "جاهز للسكن",
            "Off Plan": "قيد الإنشاء",
        },
        propertyType: {
            Villa: "فيلا",
            Townhouse: "تاونهوس",
            Apartment: "شقة",
            Penthouse: "بنتهاوس",
            Duplex: "دوبلكس",
        },
        language: {
            english: "English",
            arabic: "العربية",
        },
        theme: {
            light: "فاتح",
            dark: "داكن",
            system: "النظام",
        },
        paymentTerms: {
            "With 30% down payment over 5 years": "بدفعة أولية 30% على 5 سنوات",
            "With 20% down payment over 7 years": "بدفعة أولية 20% على 7 سنوات",
            "With 25% down payment over 4 years": "بدفعة أولية 25% على 4 سنوات",
            "With 35% down payment over 6 years": "بدفعة أولية 35% على 6 سنوات",
            "With 30% down payment over 4 years": "بدفعة أولية 30% على 4 سنوات",
            "With 20% down payment over 3 years": "بدفعة أولية 20% على 3 سنوات",
            "With 25% down payment over 6 years": "بدفعة أولية 25% على 6 سنوات",
        },
    },
}

interface AllPropertiesProps {
    properties?: Property[]
    dropdownMenuItems?: DropdownMenuItem[]
}

export default function AllPropertiesArabic({
    properties = PROPERTIES,
    dropdownMenuItems = DROPDOWN_MENU_ITEMS,
}: AllPropertiesProps) {
    const [selectedTab, setSelectedTab] = React.useState("all")
    const [language, setLanguage] = React.useState<"en" | "ar">("ar") // Default to Arabic
    const [mounted, setMounted] = React.useState(false)
    const { theme, setTheme } = useTheme()
    const t = translations[language]
    const isRTL = language === "ar"

    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Filter properties based on selected tab
    const filteredProperties = React.useMemo(() => {
        if (selectedTab === "all") {
            return properties
        } else if (selectedTab === "ready") {
            return properties.filter((property) => property.plan === "Ready to Move")
        } else if (selectedTab === "offplan") {
            return properties.filter((property) => property.plan === "Off Plan")
        }
        return properties
    }, [properties, selectedTab])

    // Transform dropdown menu items with translations
    const translatedDropdownItems = React.useMemo(() => {
        return [
            { label: t.viewDetails, icon: Eye },
            { label: t.share, icon: Share2 },
        ]
    }, [t])

    return (
        <DirectionProvider dir={isRTL ? "rtl" : "ltr"}>
            <div className="min-h-screen bg-background pt-20" dir={isRTL ? "rtl" : "ltr"}>
                <div className="mx-auto container">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6 flex-row justify-between">
                            <h1 className="text-4xl font-bold leading-none text-foreground">
                                {t.title}
                            </h1>
                            <div className="flex gap-3 items-center">
                                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                                    <TabsList className="grid w-full grid-cols-3 sm:w-[400px]">
                                        <TabsTrigger value="all">{t.tabs.all}</TabsTrigger>
                                        <TabsTrigger value="ready">{t.tabs.ready}</TabsTrigger>
                                        <TabsTrigger value="offplan">{t.tabs.offplan}</TabsTrigger>
                                    </TabsList>
                                </Tabs>
                                <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "ar")}>
                                    <SelectTrigger className="w-[120px]">
                                        <div className="flex items-center gap-2">
                                            <Languages className="h-4 w-4" />
                                            <SelectValue />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="en">{translations.en.language.english}</SelectItem>
                                        <SelectItem value="ar">{translations.en.language.arabic}</SelectItem>
                                    </SelectContent>
                                </Select>
                                {mounted && (
                                    <Tabs value={theme || "system"} onValueChange={(value) => setTheme(value)}>
                                        <TabsList className="h-9 px-1 rounded-full border border-border">
                                            <TabsTrigger value="light" className="rounded-full" title={t.theme.light}>
                                                <Sun className="h-4 w-4" />
                                            </TabsTrigger>
                                            <TabsTrigger value="dark" className="rounded-full" title={t.theme.dark}>
                                                <Moon className="h-4 w-4" />
                                            </TabsTrigger>
                                            <TabsTrigger value="system" className="rounded-full" title={t.theme.system}>
                                                <Monitor className="h-4 w-4" />
                                            </TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {filteredProperties.map((property) => (
                                <div
                                    key={property.id}
                                    className="flex flex-col gap-6 rounded-3xl border border-border bg-card py-4"
                                >
                                    <div className="flex flex-col gap-4 px-4">
                                        <div className="relative">
                                            <AspectRatio ratio={4 / 3}>
                                                <Image
                                                    src={property.image || "https://ui.shadcn.com/placeholder.svg"}
                                                    alt={property.name}
                                                    fill
                                                    className="rounded-xl object-cover"
                                                />
                                            </AspectRatio>
                                            {property.isRecentlyAdded && (
                                                <Badge
                                                    variant="secondary"
                                                    className="absolute start-2 top-2"
                                                >
                                                    {t.recentlyAdded}
                                                    <Star className="shrink-0" />
                                                </Badge>
                                            )}
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="absolute end-2 top-2 h-8 w-8 p-0"
                                            >
                                                <Bookmark className="shrink-0" />
                                                <span className="sr-only">{t.bookmark}</span>
                                            </Button>
                                            <div className="absolute bottom-2 start-2 flex flex-row items-stretch justify-center">
                                                <Badge variant="secondary" className="rounded-none rounded-s-full">
                                                    <BedDouble className="shrink-0" />
                                                    {property.beds}
                                                </Badge>
                                                <Badge variant="secondary" className="rounded-none">
                                                    <Bath className="shrink-0" />
                                                    {property.baths}
                                                </Badge>
                                                <Badge variant="secondary" className="rounded-none rounded-e-full">
                                                    {property.area} {t.areaUnit}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-col gap-1">
                                                <h2 className="text-lg font-semibold leading-7 text-foreground">
                                                    {property.name}
                                                </h2>
                                                <div className="flex flex-row items-center gap-1">
                                                    <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                    <p className="text-sm leading-5 text-muted-foreground">
                                                        {property.address}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-row gap-2">
                                                <Badge variant="secondary">
                                                    <Home className="shrink-0" />
                                                    {t.propertyType[property.type as keyof typeof t.propertyType] || property.type}
                                                </Badge>
                                                <Badge variant="secondary">
                                                    <Map className="shrink-0" />
                                                    {t.plan[property.plan as keyof typeof t.plan] || property.plan}
                                                </Badge>
                                            </div>

                                            <div className="flex flex-row items-center gap-1.5">
                                                <Avatar className="size-5">
                                                    <AvatarImage src={property.companyAvatar} />
                                                    <AvatarFallback>
                                                        {property.developer
                                                            .split(" ")
                                                            .map((word) => word[0])
                                                            .join("")
                                                            .toUpperCase()
                                                            .slice(0, 2)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <p className="text-sm leading-5 text-muted-foreground">
                                                    {property.developer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 px-4">
                                        <div className="flex flex-row items-center justify-between border-t border-border pt-6">
                                            <div className="flex flex-col gap-0.5">
                                                <div className="flex flex-row items-center gap-1">
                                                    <span className="text-xl font-bold leading-7 text-foreground">
                                                        {property.price}
                                                    </span>
                                                    <span className="text-lg leading-7 text-foreground">
                                                        {t.priceUnit}
                                                    </span>
                                                </div>
                                                <p className="text-xs leading-4 text-muted-foreground">
                                                    {t.paymentTerms[property.terms as keyof typeof t.paymentTerms] || property.terms}
                                                </p>
                                            </div>

                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <EllipsisVertical />
                                                        <span className="sr-only">{t.openMenu}</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    {translatedDropdownItems.map((item) => (
                                                        <DropdownMenuItem key={item.label}>
                                                            <item.icon />
                                                            {item.label}
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DirectionProvider>
    )
}
