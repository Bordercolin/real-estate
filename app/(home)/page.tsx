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
              <h2 className="tracking-tight">Open cases</h2>
              <p className="mt-2 text-sm text-black/70">
                Recent files pulled from the archives. Some details may be
                incomplete, altered, or{" "}
                <span className="redacted">missing</span>.
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
              <h2 className="tracking-tight">How the archive works</h2>
              <p className="mt-3 text-sm text-black/70">
                Every listing is a “case file”: photos, key facts, and a trail
                of notes. Save what you find—just don’t ignore the warnings.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <Card className="p-5">
                <div className="mono text-xs font-semibold">Saved searches</div>
                <p className="mt-2 text-sm text-black/70">
                  Mark a street. Revisit it later. See what changed while you
                  slept.
                </p>
              </Card>
              <Card className="p-5">
                <div className="mono text-xs font-semibold">Smart filters</div>
                <p className="mt-2 text-sm text-black/70">
                  Sort by price, beds, and location—plus the tags nobody
                  explains.
                </p>
              </Card>
              <Card className="p-5">
                <div className="mono text-xs font-semibold">Case cards</div>
                <p className="mt-2 text-sm text-black/70">
                  Key facts at a glance. The rest is between the lines.
                </p>
              </Card>
              <Card className="p-5">
                <div className="mono text-xs font-semibold">Growing story</div>
                <p className="mt-2 text-sm text-black/70">
                  As we wire in real data, the archive gets deeper—and stranger.
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
                <h3 className="tracking-tight">Ready to open the next file?</h3>
                <p className="mt-2 text-sm text-black/70">
                  Browse the listings. Save your favorites. If a house calls you
                  by name, we recommend you don’t answer.
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
