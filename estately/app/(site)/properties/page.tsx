import React from "react";
import Container from "../../components/layout/Container";
import { mockProperties } from "../../components/shared/mockProperties";
import PropertyCard from "../../components/data-display/PropertyCard";

export default function PropertiesPage() {
  return (
    <div className="py-12">
      <Container>
        <div>
          <h1 className="tracking-tight">Properties</h1>
          <p className="mt-2 text-sm text-black/70">
            Demo listings for frontend development. Backend connection comes
            later.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}



