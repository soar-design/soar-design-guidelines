"use client"

import * as React from "react"
import Image from "next/image"
import { Star, Bookmark, BedDouble, Bath, MapPin, Home, Map, EllipsisVertical, Eye, Share } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@soar-design/soar-react-components"
import { Badge } from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"
import { Avatar, AvatarFallback, AvatarImage } from "@soar-design/soar-react-components"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"
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
  developer: string
  price: string
  currency: string
  terms: string
  image: string
  companyAvatar?: string
  isRecentlyAdded?: boolean
}

interface AllPropertiesProps {
  properties?: Property[]
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
    area: `${property.area} sqm`,
    type: property.type,
    status: property.status,
    developer: property.companyName,
    price: property.price.toLocaleString(),
    currency: "SAR/month",
    terms: property.paymentTerms,
    image: firstImage,
    companyAvatar: property.companyAvatar,
    isRecentlyAdded: property.isRecentlyAdded || false,
  }
})

export default function AllProperties({ properties = defaultProperties }: AllPropertiesProps) {
  const [selectedTab, setSelectedTab] = React.useState<string>("all")

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
    <div className="flex min-h-screen flex-col items-center bg-background pt-20">
      <div className="flex w-full max-w-[1280px] flex-col gap-6 px-4">
        <div className="flex w-full items-start justify-between gap-6">
          <h1 className="text-4xl font-bold leading-[100%] text-foreground">All Properties</h1>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-[400px]">
            <TabsList className="w-full bg-muted p-1">
              <TabsTrigger value="all" className="flex-1">
                All
              </TabsTrigger>
              <TabsTrigger value="ready" className="flex-1">
                Ready
              </TabsTrigger>
              <TabsTrigger value="off-plan" className="flex-1">
                Off Plan
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="flex flex-col gap-6 rounded-3xl items-stretch justify-between bg-card pb-4 pt-2"
            >
              <div className="flex flex-col gap-4 px-2">
                <div className="relative h-[210px] w-full">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                  {property.isRecentlyAdded && (
                    <Badge
                      variant="secondary"
                      className="absolute left-2 top-2 gap-1 px-2.5 py-1"
                    >
                      Recently Added
                      <Star className="size-3" />
                    </Badge>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0"
                  >
                    <Bookmark className="size-4" />
                    <span className="sr-only">Bookmark</span>
                  </Button>
                  <div className="absolute bottom-2 left-2 flex">
                    <Badge variant="secondary" className="gap-1 rounded-l-full rounded-r-none px-2.5 py-1">
                      {property.beds}
                      <BedDouble className="size-3" />
                    </Badge>
                    <Badge variant="secondary" className="gap-1 rounded-none px-2.5 py-1">
                      {property.baths}
                      <Bath className="size-3" />
                    </Badge>
                    <Badge variant="secondary" className="rounded-l-none rounded-r-full px-2.5 py-1">
                      {property.area}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-3 px-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold leading-7 text-foreground">
                      {property.name}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="size-4 shrink-0" />
                      <p className="text-sm leading-5">{property.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="gap-1 px-2.5 py-1">
                      <Home className="size-3" />
                      {property.type}
                    </Badge>
                    <Badge variant="secondary" className="gap-1 px-2.5 py-1">
                      <Map className="size-3" />
                      {property.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Avatar className="size-5">
                      <AvatarImage src={property.companyAvatar || "https://ui.shadcn.com/placeholder.svg"} />
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

              <div className="flex items-center justify-between border-t border-border px-4 pt-4">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold leading-7 text-foreground">
                      {property.price}
                    </span>
                    <span className="text-lg leading-7 text-foreground">
                      {property.currency}
                    </span>
                  </div>
                  <p className="text-xs leading-4 text-muted-foreground">
                    {property.terms}
                  </p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-lg" className="size-10">
                      <EllipsisVertical />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-52">
                    <DropdownMenuItem>
                      <Eye className="mr-2 size-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share className="mr-2 size-4" />
                      Share
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
