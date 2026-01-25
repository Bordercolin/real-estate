import React from "react";
import Container from "../../components/layout/Container";
import Card from "../../components/ui/Card";

export default function AboutPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-2xl">
          <h1 className="tracking-tight">About Estately</h1>
          <p className="mt-3 text-sm text-black/70">
            This project focuses on a clean, modern real estate frontend. We’ll
            connect backend services later (auth, listings, maps, saved
            searches).
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold">Design system</div>
            <p className="mt-2 text-sm text-black/70">
              Built around your existing theme tokens: background, primary, and
              secondary.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold">Composable components</div>
            <p className="mt-2 text-sm text-black/70">
              Organized by your folder structure: layout, navigation, ui, forms,
              and data-display.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}



