import React from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-primary">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(255,41,27,0.10),transparent_55%),radial-gradient(900px_circle_at_90%_20%,rgba(23,23,23,0.06),transparent_60%)]" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
