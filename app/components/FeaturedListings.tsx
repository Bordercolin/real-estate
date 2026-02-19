import { Container } from "@/components/layout/Container";
import { mockListings } from "@/lib/mock-listings";
import { PropertyCard } from "./PropertyCard";

export function FeaturedListings() {
  return (
    <section id="featured-listings" className="py-16">
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Featured listings
        </h2>
        <p className="mt-2 text-neutral-600">
          Handpicked homes with great locations and value.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockListings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
