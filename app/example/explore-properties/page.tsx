"use client";

import {
  Card,
  CardHeader,
  CardHeading,
  CardTitle,
  CardContent,
  CardFooter,
  CardToolbar,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Badge,
  BadgeDot,
  Separator,
  Tabs,
  TabsList,
  TabsTrigger,
  Toggle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
  ScrollArea,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@soar-design/soar-react-components";
import {
  MoreVertical,
  Eye,
  Edit,
  Share2,
  Trash2,
  Building2,
  Home,
  Bed,
  Bath,
  Heart,
  SlidersHorizontal,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { useSearch } from "../search-context";
import { useFilters } from "../filters-context";
import { properties } from "../properties-data";

export default function ExplorePropertiesPage() {
  const [filter, setFilter] = useState("all");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const { searchQuery } = useSearch();
  const {
    selectedAreas,
    selectedTypes,
    selectedBedrooms,
    selectedBathrooms,
    searchFiltersOpen,
    setSearchFiltersOpen,
  } = useFilters();
  const [selectedProperty, setSelectedProperty] = useState<(typeof properties)[0] | null>(null);

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId);
      } else {
        newFavorites.add(propertyId);
      }
      return newFavorites;
    });
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedAreas.length > 0) count += selectedAreas.length;
    if (selectedTypes.length > 0) count += selectedTypes.length;
    if (selectedBedrooms.length > 0) count += selectedBedrooms.length;
    if (selectedBathrooms.length > 0) count += selectedBathrooms.length;
    return count;
  }, [selectedAreas, selectedTypes, selectedBedrooms, selectedBathrooms]);

  const filteredProperties = useMemo(() => {
    let result = properties;

    // Filter by ready to move / off plan
    if (filter === "ready-to-move") {
      result = result.filter((p) => p.readyToMove);
    } else if (filter === "off-plan") {
      result = result.filter((p) => !p.readyToMove);
    }

    // Filter by area
    if (selectedAreas.length > 0) {
      result = result.filter((p) => selectedAreas.includes(p.location));
    }

    // Filter by type
    if (selectedTypes.length > 0) {
      result = result.filter((p) => selectedTypes.includes(p.type));
    }

    // Filter by bedrooms
    if (selectedBedrooms.length > 0) {
      result = result.filter((p) => selectedBedrooms.includes(p.bedrooms));
    }

    // Filter by bathrooms
    if (selectedBathrooms.length > 0) {
      result = result.filter((p) => selectedBathrooms.includes(p.bathrooms));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.title.toLowerCase().includes(query) || p.location.toLowerCase().includes(query)
      );
    }

    return result;
  }, [filter, selectedAreas, selectedTypes, selectedBedrooms, selectedBathrooms, searchQuery]);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Explore Properties</h1>
      <p className="text-4xl font-bold text-muted-foreground mb-6">
        Explore properties content goes here.
      </p>

      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList shape="pill">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ready-to-move">Ready to Move</TabsTrigger>
            <TabsTrigger value="off-plan">Off Plan</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="ml-auto">
          <Button variant="outline" size="lg" onClick={() => setSearchFiltersOpen(true)}>
            <SlidersHorizontal className="me-2 h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge size="sm" appearance="outline" className="ms-2">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="bg-transparent border-none p-0">
            <CardContent className="bg-transparent p-0 space-y-3">
              {property.images && property.images.length > 0 && (
                <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                  <Carousel
                    className="w-full h-full"
                    opts={{
                      duration: 10,
                      dragFree: false,
                      skipSnaps: false,
                    }}
                  >
                    <CarouselContent className="-ml-0">
                      {property.images.map((image, index) => (
                        <CarouselItem key={index} className="pl-0 basis-full">
                          <div className="relative w-full h-72">
                            <Image
                              src={image}
                              alt={`${property.title} - Image ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {property.images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </>
                    )}
                  </Carousel>
                  <div className="absolute top-2 right-2 z-10">
                    <Toggle
                      pressed={favorites.has(property.id)}
                      onPressedChange={() => toggleFavorite(property.id)}
                      aria-label="Add to favorites"
                      variant="outline"
                      className="bg-background/80 backdrop-blur-sm rounded-full"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.has(property.id) ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </Toggle>
                  </div>
                  <div className="absolute bottom-2 left-2 z-10">
                    <Badge
                      variant="secondary"
                      size="lg"
                      appearance="outline"
                      className="bg-background/80 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <Bed className="h-3.5 w-3.5" />
                          <span className="text-xs">{property.bedrooms}</span>
                        </div>
                        <Separator orientation="vertical" className="h-3 bg-muted-foreground" />
                        <div className="flex items-center gap-1.5">
                          <Bath className="h-3.5 w-3.5" />
                          <span className="text-xs">{property.bathrooms}</span>
                        </div>
                        <Separator orientation="vertical" className="h-3 bg-muted-foreground" />
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs">{property.area} m²</span>
                        </div>
                      </div>
                    </Badge>
                  </div>
                </div>
              )}
              <div>
                <div className="flex items-start justify-between gap-1">
                  <div className="flex-1 min-w-0">
                    <div className="text-foreground text-base font-semibold truncate">
                      {property.title}
                    </div>
                    <div className="text-foreground text-sm mb-1">{property.location}</div>
                    {property.description && (
                      <div className="text-muted-foreground text-xs mb-3 line-clamp-2">
                        {property.description}
                      </div>
                    )}
                  </div>
                  <CardToolbar className="shrink-0">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="dim" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSelectedProperty(property)}>
                          <Eye className="me-2 h-4 w-4" />
                          <span>View Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="me-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="me-2 h-4 w-4" />
                          <span>Share</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardToolbar>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" size="lg" appearance="outline">
                    {property.type === "Apartment" ? (
                      <Building2 className="h-3 w-3 me-1" />
                    ) : (
                      <Home className="h-3 w-3 me-1" />
                    )}
                    {property.type}
                  </Badge>
                  {property.readyToMove && (
                    <Badge variant="success" size="lg" appearance="outline">
                      <BadgeDot /> Ready to Move
                    </Badge>
                  )}
                </div>
                <div className="text-base font-medium tabular-nums tracking-tight mt-3">
                  {property.price}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Property Details Dialog */}
      <Dialog open={!!selectedProperty} onOpenChange={(open) => !open && setSelectedProperty(null)}>
        <DialogContent className="p-0 sm:max-w-4xl sm:max-h-[min(90vh,800px)]">
          {selectedProperty && (
            <Card variant="accent" className="border-none">
              <CardHeader>
                <DialogHeader className="m-0">
                  <DialogTitle className="text-xl">{selectedProperty.title}</DialogTitle>
                  <DialogDescription>{selectedProperty.location}</DialogDescription>
                </DialogHeader>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(90vh-200px)] my-3 ps-6 pe-5 me-1">
                  <div className="space-y-6">
                    {/* Images */}
                    {selectedProperty.images && selectedProperty.images.length > 0 && (
                      <Carousel
                        className="w-full"
                        opts={{
                          duration: 25,
                          dragFree: false,
                          skipSnaps: false,
                        }}
                      >
                        <CarouselContent>
                          {selectedProperty.images.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="relative w-full h-96 overflow-hidden rounded-xl">
                                <Image
                                  src={image}
                                  alt={`${selectedProperty.title} - Image ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {selectedProperty.images.length > 1 && (
                          <>
                            <CarouselPrevious />
                            <CarouselNext />
                          </>
                        )}
                      </Carousel>
                    )}

                    {/* Price and Badges */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="text-3xl font-bold tabular-nums tracking-tight">
                        {selectedProperty.price}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" appearance="outline" size="lg">
                          {selectedProperty.type === "Apartment" ? (
                            <Building2 className="h-4 w-4 me-1" />
                          ) : (
                            <Home className="h-4 w-4 me-1" />
                          )}
                          {selectedProperty.type}
                        </Badge>
                        {selectedProperty.readyToMove && (
                          <Badge variant="success" appearance="outline" size="lg">
                            <BadgeDot /> Ready to Move
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Separator />

                    {/* Property Details */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <Bed className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Bedrooms</div>
                          <div className="text-lg font-semibold">{selectedProperty.bedrooms}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <Bath className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Bathrooms</div>
                          <div className="text-lg font-semibold">{selectedProperty.bathrooms}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <Maximize2 className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Area</div>
                          <div className="text-lg font-semibold">{selectedProperty.area} m²</div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Description */}
                    {selectedProperty.description && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProperty.description}
                        </p>
                      </div>
                    )}

                    {/* Location */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Location</h3>
                      <p className="text-muted-foreground">{selectedProperty.location}</p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <DialogFooter className="p-0 w-full">
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                  <Button>Contact Agent</Button>
                </DialogFooter>
              </CardFooter>
            </Card>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
