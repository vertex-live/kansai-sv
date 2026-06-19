interface AsanohaProps {
  className?: string;
  /** Enlarge the motif so the texture tiles less densely (default 1). */
  scale?: number;
}

/**
 * Asanoha (麻の葉) — the hemp-leaf geometric star pattern, a classic Japanese
 * motif symbolising health and growth (apt for a clinical company). Rendered
 * as a faint tiling texture.
 */
export default function Asanoha({ className, scale = 1 }: AsanohaProps) {
  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <pattern
          id="asanoha"
          x="0"
          y="0"
          width="56"
          height="96"
          patternUnits="userSpaceOnUse"
          patternTransform={scale === 1 ? undefined : `scale(${scale})`}
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.8" vectorEffect="non-scaling-stroke">
            <path d="M28 0 L28 48 M28 48 L0 32 M28 48 L56 32 M28 48 L0 64 M28 48 L56 64 M28 48 L28 96" />
            <path d="M0 0 L28 16 L56 0 M0 96 L28 80 L56 96" />
            <path d="M0 32 L28 16 L56 32 M0 64 L28 80 L56 64" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#asanoha)" />
    </svg>
  );
}
