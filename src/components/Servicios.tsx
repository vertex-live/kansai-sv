import { services } from "../data/content";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import Seigaiha from "./motifs/Seigaiha";
import { useReveal } from "../hooks/useReveal";

export default function Servicios() {
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="servicios" className="relative overflow-hidden bg-matcha-50/50 py-24 sm:py-32">
      {/* Patrón de olas Seigaiha, sutil en la parte superior */}
      <Seigaiha className="pointer-events-none absolute inset-x-0 top-0 h-40 text-matcha-300/40" />

      <Container className="relative">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          align="center"
        />

        <div ref={gridRef} className="reveal mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-matcha-100 bg-white/80 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-matcha-300 hover:bg-white hover:shadow-[0_30px_60px_-40px_rgba(95,122,107,0.65)]"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-matcha-100 text-matcha-600 transition-colors duration-300 group-hover:bg-matcha-500 group-hover:text-white">
                <Icon name={service.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-sumi">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sumi-light">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
