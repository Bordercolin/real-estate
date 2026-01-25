import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";
import { formatPriceEUR, type Property } from "../shared/mockProperties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-md">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={property.imageSrc}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          {property.tag ? (
            <div className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white shadow-sm">
              {property.tag}
            </div>
          ) : null}
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold">{property.title}</div>
              <div className="mt-1 text-xs text-black/60">{property.location}</div>
            </div>
            <div className="text-sm font-semibold">{formatPriceEUR(property.price)}</div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 rounded-xl bg-black/3 p-3 text-xs text-black/70">
            <div>
              <div className="font-semibold text-black">{property.beds}</div>
              <div>Beds</div>
            </div>
            <div>
              <div className="font-semibold text-black">{property.baths}</div>
              <div>Baths</div>
            </div>
            <div>
              <div className="font-semibold text-black">{property.sqft}</div>
              <div>Sqft</div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}



