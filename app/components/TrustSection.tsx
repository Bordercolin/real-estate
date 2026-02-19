import { Container } from "@/components/layout/Container";

const steps = [
  {
    number: "1",
    title: "Search",
    description: "Browse listings by location, price, and features.",
  },
  {
    number: "2",
    title: "Tour",
    description: "Schedule viewings and explore homes in person.",
  },
  {
    number: "3",
    title: "Move",
    description: "Close with confidence and get the keys.",
  },
];

export function TrustSection() {
  return (
    <section className="border-t border-neutral-200 bg-white py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-900">
          How it works
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-neutral-600">
          A simple path from search to move-in.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
