import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function FooterCta() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-16">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-6">
          <p className="text-neutral-700">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
