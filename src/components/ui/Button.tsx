import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline";
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-matcha-400 focus-visible:ring-offset-2 focus-visible:ring-offset-washi";

const variants = {
  primary:
    "bg-matcha-500 text-white shadow-sm hover:bg-matcha-600 hover:shadow-md hover:-translate-y-0.5",
  outline:
    "border border-matcha-300 text-matcha-700 hover:border-matcha-500 hover:bg-matcha-50",
};

/** Anchor-styled button (this is a single-page anchor-linked site). */
export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
