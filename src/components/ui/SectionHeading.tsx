import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

/** Eyebrow + serif title + optional intro, with a small matcha underline accent. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>();
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div ref={ref} className={`reveal flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? <span className="eyebrow mb-3">{eyebrow}</span> : null}
      <h2 className="text-3xl leading-tight text-sumi sm:text-4xl">{title}</h2>
      <span
        className={`mt-5 block h-px w-16 bg-matcha-400 ${align === "center" ? "" : ""}`}
        aria-hidden="true"
      />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-sumi-light sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
