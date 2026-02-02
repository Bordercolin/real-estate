import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-black/5 bg-white/80 shadow-sm backdrop-blur ${className}`.trim()}
    >
      {children}
    </div>
  );
}
