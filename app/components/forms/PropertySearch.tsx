import React from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function PropertySearch() {
  return (
    <Card className="mx-auto w-full max-w-4xl p-4">
      <form className="flex flex-col md:gap-4">
        <div className="flex gap-3">
          <label className="md:flex-3">
            <div className="text-xs font-semibold text-black/70">Location</div>
            <input
              placeholder="City, neighborhood, or ZIP"
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-black/40 focus:border-black/20"
            />
          </label>

          <label className="md:flex-[1.5] md:min-w-[180px]">
            <div className="text-xs font-semibold text-black/70">Type</div>
            <select className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20">
              <option>Any</option>
              <option>House</option>
              <option>Condo</option>
              <option>Apartment</option>
              <option>Commercial</option>
            </select>
          </label>
        </div>

        <label className="md:flex-1 md:min-w-[150px]">
          <div className="text-xs font-semibold text-black/70">Price</div>
          <select className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20">
            <option>Any</option>
            <option>≤ €300k</option>
            <option>≤ €500k</option>
            <option>≤ €750k</option>
            <option>≤ €1M</option>
          </select>
        </label>

        <div className="md:flex-none md:min-w-[140px]">
          <Button type="button" className="w-full">
            Search
          </Button>
        </div>
      </form>
    </Card>
  );
}
