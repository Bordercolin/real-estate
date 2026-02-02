import React from "react";
import Container from "./Container";
import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    items: [
      { label: "Properties", href: "/properties" },
      { label: "For Rent", href: "/rent" },
      { label: "For Sale", href: "/buy" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-background">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="title">
              Estately Archives
            </Link>
            <p className="mt-3 max-w-sm text-sm text-black/60">
              A catalog of listings, rumors, and recurring addresses. Browse,
              compare, and keep notes—quietly.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-2">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <div className="text-sm font-semibold">{group.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-black/70">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        className="hover:underline underline-offset-4"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Estately. All rights reserved.</div>
          <div className="flex gap-4">
            <Link
              className="hover:underline underline-offset-4"
              href="/privacy"
            >
              Privacy
            </Link>
            <Link className="hover:underline underline-offset-4" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
