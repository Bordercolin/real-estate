import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background border border-primary shadow-[0_2px_0_rgba(0,0,0,0.18)] hover:translate-y-[1px] hover:shadow-[0_1px_0_rgba(0,0,0,0.18)]",
  secondary:
    "bg-secondary text-background border border-secondary shadow-[0_2px_0_rgba(0,0,0,0.18)] hover:translate-y-[1px] hover:shadow-[0_1px_0_rgba(0,0,0,0.18)]",
  outline:
    "border border-primary text-primary bg-transparent shadow-[0_2px_0_rgba(0,0,0,0.12)] hover:bg-primary/10 hover:translate-y-[1px] hover:shadow-[0_1px_0_rgba(0,0,0,0.12)]",
  ghost: "text-primary bg-transparent hover:bg-secondary/10 hover:text-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-none font-semibold uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/30";
  const combinedClassName =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
