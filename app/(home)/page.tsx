import React from "react";
import Hero from "../components/ui/Hero";
import Container from "../components/layout/Container";
import PropertyCard from "../components/data-display/PropertyCard";
import Button from "../components/ui/Button";
import { mockProperties } from "../components/shared/mockProperties";
import Card from "../components/ui/Card";
import Link from "next/link";

export default function Home() {
  const featured = mockProperties.slice(0, 6);

  return (
    <div className="pb-16">
      <Hero />

      <section className="mt-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="tracking-tight">Featured listings</h2>
              <p className="mt-2 text-sm text-black/70">
                Handpicked homes and apartments with great photos and details.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button variant="outline" size="sm">
                <Link href="/properties">View all</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Button variant="outline" className="w-full">
              <Link href="/properties">View all properties</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="mt-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 className="tracking-tight">A cleaner way to search</h2>
              <p className="mt-3 text-sm text-black/70">
                Built with speed, clarity, and a modern UI. Save favorites and
                compare listings with ease—backend features come next.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <Card className="p-5">
                <div className="text-sm font-semibold">Saved searches</div>
                <p className="mt-2 text-sm text-black/70">
                  Keep what matters. Pick filters once, reuse anytime.
                </p>
              </Card>
              <Card className="p-5">
                <div className="text-sm font-semibold">Smart filters</div>
                <p className="mt-2 text-sm text-black/70">
                  Bedrooms, price, property type, and more—without clutter.
                </p>
              </Card>
              <Card className="p-5">
                <div className="text-sm font-semibold">Clear cards</div>
                <p className="mt-2 text-sm text-black/70">
                  Price, location, and key facts at a glance.
                </p>
              </Card>
              <Card className="p-5">
                <div className="text-sm font-semibold">Modern layout</div>
                <p className="mt-2 text-sm text-black/70">
                  Designed to scale as we add maps, auth, and backend data.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16">
        <Container>
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h3 className="tracking-tight">Ready to explore?</h3>
                <p className="mt-2 text-sm text-black/70">
                  Browse our demo listings now. We’ll hook it up to your backend
                  later.
                </p>
              </div>
              <div className="md:col-span-5 md:flex md:justify-end">
                <Button className="w-full md:w-auto">
                  <Link href="/properties">Browse properties</Link>
                </Button>
              </div>
            </div>
            <div className="h-1 w-full bg-secondary" />
          </Card>
        </Container>
      </section>
    </div>
  );
}
