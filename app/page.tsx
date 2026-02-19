import { Hero } from "./components/Hero";
import { FeaturedListings } from "./components/FeaturedListings";
import { TrustSection } from "./components/TrustSection";
import { FooterCta } from "./components/FooterCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedListings />
      <TrustSection />
      <FooterCta />
    </main>
  );
}
