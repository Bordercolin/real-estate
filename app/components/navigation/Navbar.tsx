"use client";

import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import Container from "../layout/Container";

const links = [
  { href: "/properties", label: "Properties" },
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/sell", label: "Sell" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Container>
      <nav className="sticky top-0 z-50 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="paper-strip px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="title tracking-tight">
              Estately Archives
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="mono text-xs font-semibold text-black/80 hover:text-black hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Button variant="outline" size="sm">
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm">
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>

            <button
              type="button"
              className="paper-card mono inline-flex items-center justify-center rounded-none px-4 py-2 text-xs font-semibold shadow-sm md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="mr-2">Menu</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="paper-strip px-4 py-4 sm:px-6 md:hidden lg:px-8">
            <div className="grid gap-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="mono rounded-none px-3 py-2 text-xs font-semibold text-black/80 hover:bg-black/5 hover:text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button size="sm" className="flex-1">
                  <Link href="/signup" onClick={() => setMobileOpen(false)}>
                    Sign up
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </Container>
  );
}

export default Navbar;
