"use client";

import * as React from "react";
import Image from "next/image";
import {
  Bath,
  Bed,
  Bookmark,
  Building,
  Building2,
  Home,
  MapPin,
  MoreVertical,
  Play,
  Square,
  Star,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components";

export interface Property {
  id: string;
  image?: string;
  images?: string[];
  name: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  paymentTerms: string;
  type: string;
  status?: string;
  companyName: string;
  companyAvatar: string;
  isFeatured?: boolean;
  isRecentlyAdded?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isSaved, setIsSaved] = React.useState(false);

  // Determine if we should use carousel or single image
  // Explicitly check if images array exists and has multiple items
  const images =
    Array.isArray(property.images) && property.images.length > 0
      ? property.images
      : property.image
        ? [property.image]
        : [];
  const hasMultipleImages =
    Array.isArray(property.images) && property.images.length > 1;

  // Get icon for property type
  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case "Townhouse":
        return <Home />;
      case "Villa":
        return <Home />;
      case "Apartment":
        return <Building2 />;
      case "Penthouse":
        return <Building />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-2 w-full overflow-hidden">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="bg-muted rounded-xl relative aspect-[4/3] overflow-hidden">
          {hasMultipleImages ? (
            <Carousel
              className="inset-0 absolute h-full w-full"
              opts={{ loop: true }}
            >
              <CarouselContent className="-ml-0 h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="pl-0 basis-full">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={image}
                        alt={`${property.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 z-20" />
              <CarouselNext className="right-2 z-20" />
            </Carousel>
          ) : (
            images.length > 0 && (
              <Image
                src={images[0]}
                alt={property.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                unoptimized
              />
            )
          )}

          {/* Top-left Badge */}
          <div className="top-3 left-3 absolute z-10">
            {property.isRecentlyAdded && (
              <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                <Play className="mr-1 size-3" />
                Recently Added
              </Badge>
            )}
            {property.isFeatured && (
              <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                <Star className="mr-1 size-3 fill-green-500 text-green-500" />
                Featured
              </Badge>
            )}
          </div>

          {/* Save Button - Top-right */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setIsSaved(!isSaved)}
                variant="ghost"
                size="icon-sm"
                className="bg-background/90 top-3 right-3 backdrop-blur-sm absolute z-10 rounded-full"
                aria-label="Save property"
              >
                <Bookmark
                  className={`size-4 ${isSaved
                    ? "fill-green-500 text-green-500"
                    : "text-muted-foreground"
                    }`}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isSaved ? "Saved" : "Save"}</TooltipContent>
          </Tooltip>

          {/* Stats Overlay - Bottom-left */}
          <div className="right-0 bottom-0 left-0 from-black/70 p-3 absolute z-10 bg-gradient-to-t to-transparent">
            <Badge className="bg-background/80 text-foreground backdrop-blur-md border-0">
              <Bed className="mr-1 size-3" />
              {property.bedrooms}
              <Bath className="mx-1 size-3" />
              {property.bathrooms}
              <Square className="mx-1 size-3" />
              {property.area} sqm
            </Badge>
          </div>
        </div>

        <div className="space-y-3 p-4">
          <div className="space-y-2">
            {/* Property Name */}
            <h3 className="text-base leading-tight font-semibold tracking-tight">
              {property.name}
            </h3>

            {/* Location */}
            <div className="text-muted-foreground gap-1 text-xs flex items-center">
              <MapPin className="size-3 shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </div>
          </div>

          {/* Property Type/Status Tags */}
          <div className="gap-2 flex flex-wrap">
            <Badge variant="secondary" className="text-xs">
              {getPropertyTypeIcon(property.type)}
              <span className="ms-1">{property.type}</span>
            </Badge>
            {property.status && (
              <Badge variant="outline" className="text-xs">
                {property.status}
              </Badge>
            )}
          </div>

          {/* Company Info */}
          <div className="gap-2 flex items-center">
            <Avatar className="size-5">
              <AvatarImage
                src={property.companyAvatar}
                alt={property.companyName}
              />
              <AvatarFallback className="text-xs">
                {property.companyName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="text-foreground text-xs">
              {property.companyName}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 flex items-center justify-between">
        <div className="border-border py-4 flex flex-1 items-center justify-between border-t">
          <div>
            <div className="gap-1 flex items-baseline">
              <p className="text-foreground text-xl tracking-tight">SAR</p>
              <p className="text-xl font-bold">
                {property.price.toLocaleString()}
              </p>
              <p className="text-foreground text-base">/mo</p>
            </div>
            <p className="text-muted-foreground text-xs">
              {property.paymentTerms}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="rounded-md"
                aria-label="More options"
              >
                <MoreVertical className="text-muted-foreground size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  );
}
