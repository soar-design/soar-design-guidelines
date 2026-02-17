"use client";

import * as React from "react";
import Image from "next/image";
import {
  Bath,
  Bed,
  Building,
  Building2,
  Home,
  MapPin,
  Square,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Field,
  FieldDescription,
  FieldSeparator,
  FieldTitle,
} from "@soar-design/soar-react-components";
import type { Property } from "../types";

export interface PropertyDetailsDialogProps {
  property: Property;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function getPropertyTypeIcon(type: string) {
  switch (type) {
    case "Townhouse":
      return <Home className="size-4" />;
    case "Villa":
      return <Home className="size-4" />;
    case "Apartment":
      return <Building2 className="size-4" />;
    case "Penthouse":
      return <Building className="size-4" />;
    case "Duplex":
      return <Building2 className="size-4" />;
    default:
      return <Building className="size-4" />;
  }
}

export function PropertyDetailsDialog({
  property,
  open,
  onOpenChange,
}: PropertyDetailsDialogProps) {
  const images =
    Array.isArray(property.images) && property.images.length > 0
      ? property.images
      : property.image
        ? [property.image]
        : [];
  const hasMultipleImages = images.length > 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 gap-0 overflow-hidden">
        {/* Full-width Image Carousel */}
        <div className="w-full aspect-[4/3] bg-muted relative overflow-hidden">
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
                        sizes="(max-width: 768px) 100vw, 425px"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="start-2 z-30 border-none bg-popover/80! hover:bg-popover! text-foreground backdrop-blur-sm backdrop-saturate-[1.5] backdrop-brightness-[1.5]" />
              <CarouselNext className="end-2 z-30 border-none bg-popover/80! hover:bg-popover! text-foreground backdrop-blur-sm backdrop-saturate-[1.5] backdrop-brightness-[1.5]" />
            </Carousel>
          ) : (
            images.length > 0 && (
              <Image
                src={images[0]}
                alt={property.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 425px"
                unoptimized
              />
            )
          )}
          {/* Badges overlay */}
          <div className="top-3 left-3 absolute z-10 flex gap-2">
            {property.isRecentlyAdded && (
              <Badge className="bg-popover/80 font-bold text-foreground backdrop-blur-md backdrop-saturate-[1.5]">
                New
              </Badge>
            )}
            {property.isFeatured && (
              <Badge className="bg-popover/80 font-bold text-foreground backdrop-blur-md backdrop-saturate-[1.5]">
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Property Details - Scrollable */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          <DialogHeader className="p-0">
            <DialogTitle className="text-xl">{property.name}</DialogTitle>
          </DialogHeader>

          {/* Key stats row */}
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="gap-1.5">
              {getPropertyTypeIcon(property.type)}
              <span>{property.type}</span>
            </Badge>
            {property.status && (
              <Badge variant="outline">{property.status}</Badge>
            )}
            <Badge variant="outline" className="gap-1.5">
              <Bed className="size-4" />
              {property.bedrooms} Bedrooms
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <Bath className="size-4" />
              {property.bathrooms} Bathrooms
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <Square className="size-4" />
              {property.area} sqm
            </Badge>
          </div>

          <FieldSeparator />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldTitle>Location</FieldTitle>
              <FieldDescription className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" />
                {property.location}
              </FieldDescription>
            </Field>
            <Field>
              <FieldTitle>Property Type</FieldTitle>
              <FieldDescription className="flex items-center gap-2">
                {getPropertyTypeIcon(property.type)}
                {property.type}
              </FieldDescription>
            </Field>
          </div>

          <FieldSeparator />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldTitle>Price</FieldTitle>
              <FieldDescription>
                <span className="text-foreground font-semibold">
                  SAR {property.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground"> /mo</span>
              </FieldDescription>
            </Field>
            <Field>
              <FieldTitle>Payment Terms</FieldTitle>
              <FieldDescription>{property.paymentTerms}</FieldDescription>
            </Field>
          </div>

          <FieldSeparator />
          <Field>
            <FieldTitle>Developer / Company</FieldTitle>
            <FieldDescription>
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage
                    src={property.companyAvatar}
                    alt={property.companyName}
                  />
                  <AvatarFallback className="text-xs">
                    {property.companyName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-foreground">
                  {property.companyName}
                </span>
              </div>
            </FieldDescription>
          </Field>
        </div>
      </DialogContent>
    </Dialog>
  );
}
