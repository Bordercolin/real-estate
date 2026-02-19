import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900",
  secondary:
    "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-400",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

  if (href) {
    return (
      <Link
        href={href}
        className={cn(base, variantStyles[variant], className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(base, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
