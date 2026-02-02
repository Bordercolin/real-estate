import React from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";


export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
