import React from "react";
import Container from "../layout/Container";
import Image from "next/image";
import Button from "./Button";
import PropertySearch from "../forms/PropertySearch";

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              New listings added daily
            </div>

            <h1 className="mt-5 leading-[1.05] tracking-tight">
              Find your next home—fast, simple, and modern.
            </h1>
            <p className="mt-4 max-w-xl text-base text-black/70">
              Browse curated listings, compare neighborhoods, and save your
              favorites. Backend integrations later—frontend experience now.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Browse properties</Button>
              <Button variant="outline">Get alerts</Button>
            </div>

            <div className="mt-8">
              <PropertySearch />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl border border-black/5 bg-white/60 p-4 backdrop-blur">
                <div className="text-2xl font-bold">1.2k+</div>
                <div className="mt-1 text-black/60">Listings</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/60 p-4 backdrop-blur">
                <div className="text-2xl font-bold">80+</div>
                <div className="mt-1 text-black/60">Neighborhoods</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/60 p-4 backdrop-blur">
                <div className="text-2xl font-bold">4.9</div>
                <div className="mt-1 text-black/60">Avg rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/50 shadow-sm backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(255,41,27,0.12),transparent_55%)]" />
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/house.jpg"
                  alt="Featured home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-3 p-4 text-xs text-black/70">
                <div className="rounded-2xl bg-white/70 p-3 backdrop-blur">
                  <div className="font-semibold text-black">Verified</div>
                  <div className="mt-1">Photos & details</div>
                </div>
                <div className="rounded-2xl bg-white/70 p-3 backdrop-blur">
                  <div className="font-semibold text-black">Smart search</div>
                  <div className="mt-1">Filters that help</div>
                </div>
                <div className="rounded-2xl bg-white/70 p-3 backdrop-blur">
                  <div className="font-semibold text-black">Saved</div>
                  <div className="mt-1">Favorites & alerts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
