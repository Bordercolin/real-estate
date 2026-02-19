"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [location, setLocation] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // UI-only: scroll to listings or link to /properties later
    if (location.trim()) {
      const el = document.getElementById("featured-listings");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative bg-neutral-100 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Find your next home
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Search listings, schedule tours, and move with confidence.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="text"
              placeholder="City, neighborhood, or ZIP"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 sm:w-72"
              aria-label="Search location"
            />
            <Button type="submit" className="sm:w-auto">
              Search
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
