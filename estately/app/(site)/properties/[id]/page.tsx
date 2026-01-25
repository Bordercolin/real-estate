import React from "react";
import Container from "../../../components/layout/Container";
import Card from "../../../components/ui/Card";
import Image from "next/image";
import { formatPriceEUR, mockProperties } from "../../../components/shared/mockProperties";
import Link from "next/link";
import Button from "../../../components/ui/Button";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="py-12">
        <Container>
          <h1>Not found</h1>
          <p className="mt-2 text-sm text-black/70">
            This property doesn’t exist in the demo dataset.
          </p>
          <div className="mt-6">
            <Button variant="outline" size="sm">
              <Link href="/properties">Back to properties</Link>
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <div>
            <h1 className="tracking-tight">{property.title}</h1>
            <p className="mt-2 text-sm text-black/70">{property.location}</p>
          </div>
          <div className="text-lg font-semibold">{formatPriceEUR(property.price)}</div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <Card className="overflow-hidden lg:col-span-8">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={property.imageSrc}
                alt={property.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>
          </Card>

          <Card className="p-6 lg:col-span-4">
            <div className="text-sm font-semibold">Key details</div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl bg-black/3 p-4">
                <div className="text-lg font-bold">{property.beds}</div>
                <div className="mt-1 text-xs text-black/60">Beds</div>
              </div>
              <div className="rounded-2xl bg-black/3 p-4">
                <div className="text-lg font-bold">{property.baths}</div>
                <div className="mt-1 text-xs text-black/60">Baths</div>
              </div>
              <div className="rounded-2xl bg-black/3 p-4">
                <div className="text-lg font-bold">{property.sqft}</div>
                <div className="mt-1 text-xs text-black/60">Sqft</div>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full">Contact agent</Button>
            </div>
            <div className="mt-3">
              <Button variant="outline" className="w-full">
                Save to favorites
              </Button>
            </div>

            <div className="mt-6 text-xs text-black/60">
              Demo page. We’ll connect real data + auth later.
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Button variant="outline" size="sm">
            <Link href="/properties">Back to properties</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}



