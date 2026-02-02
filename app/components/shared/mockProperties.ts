export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  tag?: "New" | "Open House" | "Price Drop";
  imageSrc: string;
};

export const mockProperties: Property[] = [
  {
    id: "p-001",
    title: "Sunlit Family Home",
    location: "Amsterdam, NL",
    price: 685000,
    beds: 4,
    baths: 2,
    sqft: 1780,
    tag: "New",
    imageSrc: "/images/house.jpg",
  },
  {
    id: "p-002",
    title: "City Apartment",
    location: "Rotterdam, NL",
    price: 415000,
    beds: 2,
    baths: 1,
    sqft: 910,
    tag: "Price Drop",
    imageSrc: "/images/house.jpg",
  },
  {
    id: "p-003",
    title: "Modern Townhouse",
    location: "Utrecht, NL",
    price: 525000,
    beds: 3,
    baths: 2,
    sqft: 1325,
    tag: "Open House",
    imageSrc: "/images/house.jpg",
  },
  {
    id: "p-004",
    title: "Cozy Starter Home",
    location: "Eindhoven, NL",
    price: 349000,
    beds: 2,
    baths: 1,
    sqft: 860,
    imageSrc: "/images/house.jpg",
  },
  {
    id: "p-005",
    title: "Canal-side Loft",
    location: "Amsterdam, NL",
    price: 799000,
    beds: 2,
    baths: 2,
    sqft: 1205,
    tag: "New",
    imageSrc: "/images/house.jpg",
  },
  {
    id: "p-006",
    title: "Spacious Suburban House",
    location: "Haarlem, NL",
    price: 610000,
    beds: 4,
    baths: 2,
    sqft: 1650,
    imageSrc: "/images/house.jpg",
  },
  {
    id: "p-007",
    title: "Minimal Studio",
    location: "The Hague, NL",
    price: 259000,
    beds: 1,
    baths: 1,
    sqft: 520,
    imageSrc: "/images/house.jpg",
  },
  {
    id: "p-008",
    title: "Premium Penthouse",
    location: "Rotterdam, NL",
    price: 1250000,
    beds: 3,
    baths: 2,
    sqft: 1920,
    tag: "New",
    imageSrc: "/images/house.jpg",
  },
];

export function formatPriceEUR(price: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}



