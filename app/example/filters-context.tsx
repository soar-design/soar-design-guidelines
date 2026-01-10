"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FiltersContextType {
  searchFiltersOpen: boolean;
  setSearchFiltersOpen: (open: boolean) => void;
  selectedAreas: string[];
  setSelectedAreas: (areas: string[] | ((prev: string[]) => string[])) => void;
  selectedTypes: string[];
  setSelectedTypes: (types: string[] | ((prev: string[]) => string[])) => void;
  selectedBedrooms: number[];
  setSelectedBedrooms: (
    bedrooms: number[] | ((prev: number[]) => number[]),
  ) => void;
  selectedBathrooms: number[];
  setSelectedBathrooms: (
    bathrooms: number[] | ((prev: number[]) => number[]),
  ) => void;
  clearFilters: () => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [searchFiltersOpen, setSearchFiltersOpen] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState<number[]>([]);

  const clearFilters = () => {
    setSelectedAreas([]);
    setSelectedTypes([]);
    setSelectedBedrooms([]);
    setSelectedBathrooms([]);
  };

  return (
    <FiltersContext.Provider
      value={{
        searchFiltersOpen,
        setSearchFiltersOpen,
        selectedAreas,
        setSelectedAreas,
        selectedTypes,
        setSelectedTypes,
        selectedBedrooms,
        setSelectedBedrooms,
        selectedBathrooms,
        setSelectedBathrooms,
        clearFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
}
