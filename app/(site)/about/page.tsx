import React from "react";
import Container from "../../components/layout/Container";
import Card from "../../components/ui/Card";

export default function AboutPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-2xl">
          <h1 className="tracking-tight">About the Archives</h1>
          <p className="mt-3 text-sm text-black/70">
            Estately Archives is a horror real-estate catalog: listings as case
            files, neighborhoods as chapters, and every “For Sale” sign as a
            potential clue. Some stories end with keys. Others don’t end.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card className="p-6">
            <div className="mono text-xs font-semibold">Design system</div>
            <p className="mt-2 text-sm text-black/70">
              Built on “paper + ink + blood” tokens: case-file surfaces, stamped
              tags, and just enough grime to feel real.
            </p>
          </Card>
          <Card className="p-6">
            <div className="mono text-xs font-semibold">
              Composable components
            </div>
            <p className="mt-2 text-sm text-black/70">
              Organized like an investigation: navigation, search, listings, and
              a growing set of story fragments you can expand over time.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
