import React from "react";
import Navbar from "../components/navigation/Navbar";
import Hero from "../components/ui/Hero";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-primary min-h-screen bg-[rgb(255,242,226)] bg-[linear-gradient(90deg,rgba(255,242,226,1)_0%,rgba(220,237,247,1)_100%)]">
        <Navbar />
        <Hero />
      </div>
      <main>{children}</main>
    </div>
  );
}
