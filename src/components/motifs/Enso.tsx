interface EnsoProps {
  className?: string;
  /** Animate the brush stroke drawing itself in. */
  animate?: boolean;
  strokeWidth?: number;
  title?: string;
}

/**
 * Ensō (円相) — the Zen brush-drawn circle. Left intentionally open, as in
 * the tradition. Used as KAN SAI's brand mark and as a decorative accent.
 */
export default function Enso({
  className,
  animate = false,
  strokeWidth = 7,
  title,
}: EnsoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M72 24 C60 14, 37 15, 26 28 C14 42, 16 66, 32 76 C49 86, 73 81, 80 62"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={
          animate
            ? { strokeDasharray: 760, animation: "draw-enso 2.2s ease-out forwards" }
            : undefined
        }
      />
    </svg>
  );
}
