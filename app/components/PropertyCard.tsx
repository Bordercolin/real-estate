import Link from "next/link";
import type { Property } from "@/types";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const href = `/properties/${property.slug}`;

  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:shadow-md",
        className
      )}
    >
      <Link href={href} className="block">
        <div className="aspect-[4/3] w-full bg-neutral-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={property.imageUrl}
            alt={property.title}
            className="h-full w-full object-cover"
            width={600}
            height={400}
          />
        </div>
        <div className="p-4">
          <p className="text-lg font-semibold text-neutral-900">
            {formatPrice(property.price)}
          </p>
          <p className="mt-1 text-sm text-neutral-600">{property.address}</p>
          <p className="mt-2 text-sm text-neutral-500">
            {property.beds} beds · {property.baths} baths
          </p>
        </div>
      </Link>
      <div className="border-t border-neutral-100 px-4 py-3">
        <Link
          href={href}
          className="text-sm font-medium text-neutral-900 underline-offset-2 hover:underline"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
