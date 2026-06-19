interface SeigaihaProps {
  className?: string;
}

/**
 * Seigaiha (青海波) — the traditional overlapping-wave pattern, rendered as a
 * faint tiling background. Used as a subtle texture behind light sections.
 */
export default function Seigaiha({ className }: SeigaihaProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="seigaiha"
          x="0"
          y="0"
          width="80"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.1">
            <path d="M0 40 A40 40 0 0 1 80 40" />
            <path d="M0 40 A28 28 0 0 1 56 40" transform="translate(12 0)" />
            <path d="M0 40 A16 16 0 0 1 32 40" transform="translate(24 0)" />
            <path d="M-40 40 A40 40 0 0 1 40 40" />
            <path d="M40 40 A40 40 0 0 1 120 40" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#seigaiha)" />
    </svg>
  );
}
