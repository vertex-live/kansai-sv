import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centered, max-width page gutter wrapper. */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
