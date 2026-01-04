import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import Container from "../layout/Container";

const links = [
  { href: "/", label: "Condos" },
  { href: "/", label: "Houses" },
  { href: "/", label: "Commercial" },
  { href: "/", label: "For Rent" },
  { href: "/", label: "About" },
  { href: "/", label: "Contact" },
];

function Navbar() {
  return (
    <Container>
      <nav className=" h-30 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="title">
            Estately
          </Link>

          <div className="flex items-center gap-10">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-medium hover:underline underline-offset-4 decoration-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <Link href="/signup">Signup</Link>
            </Button>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
