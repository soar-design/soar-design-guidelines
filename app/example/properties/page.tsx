"use client"

import * as React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Badge } from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"
import { Tabs, TabsList, TabsTrigger } from "@soar-design/soar-react-components"
import { Avatar, AvatarFallback, AvatarImage } from "@soar-design/soar-react-components"
import { Separator } from "@soar-design/soar-react-components"
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
    Home,
    Map,
    MapPin,
    EllipsisVertical,
    Eye,
    Share,
    Sun,
    Moon,
    Monitor,
    Languages,
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
    status: string
    price: string
    currency: string
    terms: string
    developer: string
    recentlyAdded: boolean
    image?: string
    companyAvatar?: string
}

interface AllPropertiesProps {
    properties?: Property[]
}

const translations = {
    en: {
        title: "All Properties",
        tabs: {
            all: "All",
            ready: "Ready",
            offPlan: "Off Plan",
        },
        recentlyAdded: "Recently Added",
        bookmark: "Bookmark",
        viewDetails: "View Details",
        share: "Share",
        moreOptions: "More options",
        currency: "SAR/month",
        areaUnit: "sqm",
        status: {
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
            offPlan: "قيد الإنشاء",
        },
        recentlyAdded: "مضاف حديثاً",
        bookmark: "حفظ",
        viewDetails: "عرض التفاصيل",
        share: "مشاركة",
        moreOptions: "خيارات إضافية",
        currency: "ريال/شهر",
        areaUnit: "م²",
        status: {
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

// Transform JSON data to match Property interface
const defaultProperties: Property[] = propertiesData.map((property) => {
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
        status: property.status,
        price: property.price.toLocaleString(),
        currency: "SAR/month", // Will be overridden with translation
        terms: property.paymentTerms,
        developer: property.companyName,
        recentlyAdded: property.isRecentlyAdded || false,
        image: firstImage,
        companyAvatar: property.companyAvatar,
    }
})

export default function AllProperties({
    properties = defaultProperties,
}: AllPropertiesProps) {
    const [mounted, setMounted] = React.useState(false)
    const [selectedTab, setSelectedTab] = React.useState("all")
    const [language, setLanguage] = React.useState<"en" | "ar">("en")
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
            return properties.filter((property) => property.status === "Ready to Move")
        } else if (selectedTab === "off-plan") {
            return properties.filter((property) => property.status === "Off Plan")
        }
        return properties
    }, [properties, selectedTab])

    return (
        <DirectionProvider dir={isRTL ? "rtl" : "ltr"}>
            <div className="flex min-h-screen w-full flex-col items-center bg-background pt-20" dir={isRTL ? "rtl" : "ltr"}>
                <div className="flex w-full max-w-[1280px] flex-col gap-6 px-4 md:px-0">
                    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-start">
                        <h1 className="text-4xl font-bold leading-[100%] text-foreground">
                            {t.title}
                        </h1>
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full md:w-auto">
                                <TabsList className="w-full md:w-[400px]">
                                    <TabsTrigger value="all" className="flex-1 md:w-[161px]">
                                        {t.tabs.all}
                                    </TabsTrigger>
                                    <TabsTrigger value="ready" className="flex-1 md:w-[161px]">
                                        {t.tabs.ready}
                                    </TabsTrigger>
                                    <TabsTrigger value="off-plan" className="flex-1 md:w-[70px]">
                                        {t.tabs.offPlan}
                                    </TabsTrigger>
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

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProperties.map((property) => (
                            <div
                                key={property.id}
                                className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-4"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                                        <Image
                                            src={property.image || "https://ui.shadcn.com/placeholder.svg"}
                                            alt={property.name}
                                            fill
                                            className="object-cover"
                                        />
                                        {property.recentlyAdded && (
                                            <Badge
                                                variant="secondary"
                                                className="absolute start-2 top-2 gap-1"
                                            >
                                                {t.recentlyAdded}
                                                <Star className="h-3 w-3" />
                                            </Badge>
                                        )}
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="absolute end-2 top-2 h-8 w-8 p-0"
                                            aria-label={t.bookmark}
                                        >
                                            <Bookmark className="h-4 w-4" />
                                        </Button>
                                        <div className="absolute bottom-2 start-2 flex items-center">
                                            <Badge variant="secondary" className={isRTL ? "rounded-e-full rounded-s-none" : "rounded-l-full rounded-r-none"}>
                                                <BedDouble className="h-3 w-3" />
                                                {property.beds}
                                            </Badge>
                                            <Separator orientation="vertical" className="h-5" />
                                            <Badge variant="secondary" className="rounded-none">
                                                <Bath className="h-3 w-3" />
                                                {property.baths}
                                            </Badge>
                                            <Separator orientation="vertical" className="h-5" />
                                            <Badge variant="secondary" className={isRTL ? "rounded-e-none rounded-s-full" : "rounded-l-none rounded-r-full"}>
                                                {property.area} {t.areaUnit}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-lg font-semibold leading-7 text-foreground">
                                                {property.name}
                                            </h2>
                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                <MapPin className="h-4 w-4 shrink-0" />
                                                <p className="text-sm leading-5">{property.address}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary">
                                                <Home className="h-3 w-3" />
                                                {t.propertyType[property.type as keyof typeof t.propertyType] || property.type}
                                            </Badge>
                                            <Badge variant="secondary">
                                                <Map className="h-3 w-3" />
                                                {t.status[property.status as keyof typeof t.status] || property.status}
                                            </Badge>
                                        </div>

                                        <div className="flex items-center gap-1.5">
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
                                            <span className="text-sm leading-5 text-muted-foreground">
                                                {property.developer}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-border pt-6">
                                    <div className="flex flex-col gap-0.5">
                                        <div className="flex items-center gap-1">
                                            <span className="text-xl font-bold leading-7 text-foreground">
                                                {property.price}
                                            </span>
                                            <span className="text-lg leading-7 text-foreground">
                                                {t.currency}
                                            </span>
                                        </div>
                                        <p className="text-xs leading-4 text-muted-foreground">
                                            {t.paymentTerms[property.terms as keyof typeof t.paymentTerms] || property.terms}
                                        </p>
                                    </div>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-10 w-10 rounded-full"
                                                aria-label={t.moreOptions}
                                            >
                                                <EllipsisVertical />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-52">
                                            <DropdownMenuItem>
                                                <Eye />
                                                {t.viewDetails}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Share />
                                                {t.share}
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DirectionProvider>
    )
}
