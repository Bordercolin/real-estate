import React from "react";
import Container from "../../components/layout/Container";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function ContactPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-2xl">
          <h1 className="tracking-tight">Contact</h1>
          <p className="mt-2 text-sm text-black/70">
            Placeholder contact form. We’ll wire submissions later.
          </p>
        </div>

        <Card className="mt-8 p-6">
          <form className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <div className="text-xs font-semibold text-black/70">Name</div>
              <input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20" />
            </label>
            <label className="sm:col-span-1">
              <div className="text-xs font-semibold text-black/70">Email</div>
              <input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20" />
            </label>
            <label className="sm:col-span-2">
              <div className="text-xs font-semibold text-black/70">Message</div>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20"
              />
            </label>
            <div className="sm:col-span-2">
              <Button type="button">Send message</Button>
            </div>
          </form>
        </Card>
      </Container>
    </div>
  );
}



