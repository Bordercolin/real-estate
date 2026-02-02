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
            <div className="paper-card mono inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-black/80">
              <span className="stamp px-2 py-0.5 text-[10px]">Case update</span>
              New files added nightly
            </div>

            <h1 className="mt-5 leading-[1.05] tracking-tight">
              Find a home. Or an address that finds you.
            </h1>
            <p className="mt-4 max-w-xl text-base text-black/70">
              Estately Archives catalogs properties that don’t stay on the
              market for long—sometimes because they sell, sometimes because
              they
              <span className="redacted"> should not be entered</span>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Browse case files</Button>
              <Button variant="outline">Request an inspection</Button>
            </div>

            <div className="mt-8">
              <PropertySearch />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="paper-card p-4">
                <div className="text-2xl font-bold">1.2k+</div>
                <div className="mt-1 text-black/60">Filed cases</div>
              </div>
              <div className="paper-card p-4">
                <div className="text-2xl font-bold">80+</div>
                <div className="mt-1 text-black/60">Problem streets</div>
              </div>
              <div className="paper-card p-4">
                <div className="text-2xl font-bold">4.9</div>
                <div className="mt-1 text-black/60">Survival rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="paper-card relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(122,20,20,0.12),transparent_55%)]" />
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/house.jpg"
                  alt="Featured property"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-3 p-4 text-xs text-black/70">
                <div className="paper-card p-3">
                  <div className="mono font-semibold text-black">Filed</div>
                  <div className="mt-1">Photos & notes</div>
                </div>
                <div className="paper-card p-3">
                  <div className="mono font-semibold text-black">Tagged</div>
                  <div className="mt-1">Warnings & lore</div>
                </div>
                <div className="paper-card p-3">
                  <div className="mono font-semibold text-black">Sealed</div>
                  <div className="mt-1">Your watchlist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
