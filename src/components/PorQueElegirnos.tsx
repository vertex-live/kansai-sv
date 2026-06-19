import { whyUs } from "../data/content";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import { useReveal } from "../hooks/useReveal";

export default function PorQueElegirnos() {
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className="bg-washi py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} align="center" />

        <div ref={gridRef} className="reveal mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <span className="relative inline-flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-matcha-100" />
                <Icon name={item.icon} className="relative h-8 w-8 text-matcha-600" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-sumi">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sumi-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
