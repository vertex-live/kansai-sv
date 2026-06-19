export type IconName =
  | "stethoscope"
  | "wrench"
  | "install"
  | "gauge"
  | "parts"
  | "consult"
  | "precision"
  | "clock"
  | "badge"
  | "handshake"
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "menu"
  | "close"
  | "arrow";

interface IconProps {
  name: IconName;
  className?: string;
}

// Minimal, consistent line icons (stroke = currentColor).
const paths: Record<IconName, JSX.Element> = {
  stethoscope: (
    <>
      <path d="M6 3v5a5 5 0 0 0 10 0V3" />
      <path d="M11 18a5 5 0 0 0 9 0v-3" />
      <circle cx="20" cy="12" r="2" />
      <path d="M6 3H4M16 3h2M11 18v-5" />
    </>
  ),
  wrench: (
    <path d="M21 4a5 5 0 0 1-6.5 6.5L5 20a2.1 2.1 0 0 1-3-3l9.5-9.5A5 5 0 0 1 17 1l-3 3 2 2 3-3c.6.3 1.4.6 2 1Z" />
  ),
  install: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8M12 18v3" />
      <path d="m7 13 2.5 2.5L14 11" />
    </>
  ),
  gauge: (
    <>
      <path d="M12 14a8 8 0 1 1 8-8" opacity="0" />
      <path d="M4 18a9 9 0 1 1 16 0" />
      <path d="m12 13 4-4" />
      <circle cx="12" cy="14" r="1.4" />
    </>
  ),
  parts: (
    <>
      <path d="M12 2 4 6v6c0 4 3.5 6.8 8 8 4.5-1.2 8-4 8-8V6l-8-4Z" />
      <path d="M12 7v10M7 9.5v5M17 9.5v5" />
    </>
  ),
  consult: (
    <>
      <path d="M21 15a3 3 0 0 1-3 3H8l-4 3V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3Z" />
      <path d="M9 9h7M9 12.5h4" />
    </>
  ),
  precision: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  badge: (
    <>
      <path d="M12 2 4 6v5c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-4Z" />
      <path d="m8.5 12 2.3 2.3 4.7-4.6" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2 0 1.4 1.4 0 0 0 0-2" />
      <path d="m15 17 1.5 1.5a1.4 1.4 0 0 0 2-2L13 11" />
      <path d="M3 8l4-4 5 5-2 2a1.5 1.5 0 0 1-2 0L6 9" />
      <path d="m13 6 3-2 5 4-3 3" />
    </>
  ),
  phone: (
    <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L19 11l2 5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21Z" />
      <path d="M9 8.5c0 4 3 6.5 6 6.5.6 0 1-.6 1-1.2l-2-1-1 1c-1.2-.5-2.3-1.6-2.8-2.8l1-1-1-2c-.6 0-1.2.4-1.2 1Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
