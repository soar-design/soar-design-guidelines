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
