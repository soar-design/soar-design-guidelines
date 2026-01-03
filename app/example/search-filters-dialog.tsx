"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
  ScrollArea,
  Input,
  Checkbox,
  Label,
  Button,
  Separator,
  Card,
  ToggleGroup,
  ToggleGroupItem,
} from "@soar-design/soar-react-components";
import { useSearch } from "./search-context";
import { useFilters } from "./filters-context";
import { useMemo } from "react";
import { properties } from "./properties-data";
import { Building2, Home } from "lucide-react";

export function SearchFiltersDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const uniqueAreas = useMemo(() => {
    const areas = new Set(properties.map((p) => p.location));
    return Array.from(areas).sort();
  }, []);

  const uniqueBedrooms = useMemo(() => {
    const bedrooms = new Set(properties.map((p) => p.bedrooms));
    return Array.from(bedrooms).sort((a, b) => a - b);
  }, []);

  const uniqueBathrooms = useMemo(() => {
    const bathrooms = new Set(properties.map((p) => p.bathrooms));
    return Array.from(bathrooms).sort((a, b) => a - b);
  }, []);
  const { searchQuery, setSearchQuery } = useSearch();
  const {
    selectedAreas,
    setSelectedAreas,
    selectedTypes,
    setSelectedTypes,
    selectedBedrooms,
    setSelectedBedrooms,
    selectedBathrooms,
    setSelectedBathrooms,
    clearFilters,
  } = useFilters();

  const handleAreaChange = (checked: boolean, area: string) => {
    setSelectedAreas((prev) => (checked ? [...prev, area] : prev.filter((a) => a !== area)));
  };

  const handleTypeChange = (checked: boolean, type: string) => {
    setSelectedTypes((prev) => (checked ? [...prev, type] : prev.filter((t) => t !== type)));
  };

  const handleBedroomChange = (values: string[]) => {
    setSelectedBedrooms(values.map((v) => parseInt(v)));
  };

  const handleBathroomChange = (values: string[]) => {
    setSelectedBathrooms(values.map((v) => parseInt(v)));
  };

  const handleClearFilters = () => {
    clearFilters();
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 sm:max-w-2xl sm:max-h-[min(90vh,800px)]">
        <DialogHeader className="pt-5 pb-3 m-0 border-b border-border px-6">
          <DialogTitle className="text-base">Search & Filters</DialogTitle>
          <DialogDescription>Find properties that match your interests and refine your search.</DialogDescription>
        </DialogHeader>
        <DialogBody className="p-0">
          <ScrollArea className="h-[calc(90vh-200px)] my-3 ps-6 pe-5 me-1">
            <div className="space-y-6">
              {/* Search Input */}
              <div>
                <h4 className="mb-3 text-sm font-medium">Search</h4>
                <Input
                  type="search"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <Separator />

              {/* Property Type */}
              <div>
                <h4 className="mb-3 text-sm font-medium">Property Type</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Apartment", "Villa"].map((type) => {
                    const Icon = type === "Apartment" ? Building2 : Home;
                    const isSelected = selectedTypes.includes(type);
                    return (
                      <Card
                        key={type}
                        onClick={() => handleTypeChange(!isSelected, type)}
                        className={`p-6 transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "hover:bg-accent hover:border-border"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className={`p-3 rounded-lg ${
                            isSelected ? "bg-primary/10" : "bg-muted"
                          }`}>
                            <Icon className={`h-8 w-8 ${
                              isSelected ? "text-primary" : "text-muted-foreground"
                            }`} />
                          </div>
                          <span className={`font-semibold text-base ${
                            isSelected ? "text-primary" : ""
                          }`}>
                            {type}
                          </span>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <Separator />

              {/* Areas */}
              <div>
                <h4 className="mb-3 text-sm font-medium">Areas</h4>
                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {uniqueAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2.5">
                      <Checkbox
                        id={area}
                        checked={selectedAreas.includes(area)}
                        onCheckedChange={(checked) => handleAreaChange(checked === true, area)}
                      />
                      <Label htmlFor={area} className="grow font-normal cursor-pointer">
                        {area}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Bedrooms */}
              <div>
                <h4 className="mb-3 text-sm font-medium">Bedrooms</h4>
                <ToggleGroup
                  type="multiple"
                  variant="outline"
                  value={selectedBedrooms.map((b) => b.toString())}
                  onValueChange={handleBedroomChange}
                  className="flex-wrap"
                >
                  {uniqueBedrooms.map((bedrooms) => (
                    <ToggleGroupItem key={bedrooms} value={bedrooms.toString()}>
                      {bedrooms} {bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              <Separator />

              {/* Bathrooms */}
              <div>
                <h4 className="mb-3 text-sm font-medium">Bathrooms</h4>
                <ToggleGroup
                  type="multiple"
                  variant="outline"
                  value={selectedBathrooms.map((b) => b.toString())}
                  onValueChange={handleBathroomChange}
                  className="flex-wrap"
                >
                  {uniqueBathrooms.map((bathrooms) => (
                    <ToggleGroupItem key={bathrooms} value={bathrooms.toString()}>
                      {bathrooms} {bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          </ScrollArea>
        </DialogBody>
        <DialogFooter className="px-6 py-4 border-t border-border flex-col sm:flex-row gap-2.5">
          <DialogClose asChild>
            <Button variant="outline" onClick={handleClearFilters} className="w-full sm:w-auto">
              Clear All
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="w-full sm:w-auto">Apply Filters</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

