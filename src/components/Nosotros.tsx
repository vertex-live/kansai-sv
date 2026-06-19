import { about } from "../data/content";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { useReveal } from "../hooks/useReveal";

export default function Nosotros() {
  const textRef = useReveal<HTMLDivElement>();
  const cardsRef = useReveal<HTMLDivElement>();

  return (
    <section id="nosotros" className="bg-washi pt-12 pb-24 sm:pt-16 sm:pb-32">
      <Container>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} align="center" />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-12">
          {/* Marca visual */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto flex aspect-[4/5] max-w-sm items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-matcha-100 via-washi to-matcha-50 shadow-[0_40px_90px_-50px_rgba(95,122,107,0.55)]">
              <img src="/green enso.png" alt="" className="h-56 w-56 object-contain opacity-70" />
              <span className="absolute font-serif text-6xl text-matcha-700/90">関西</span>
              {/* IMAGEN: reemplazar por una foto del equipo o de las instalaciones */}
              <span className="absolute bottom-5 text-[0.65rem] uppercase tracking-zen text-sumi-muted">
                Kansai · El Salvador
              </span>
            </div>
          </div>

          {/* Texto */}
          <div ref={textRef} className="reveal order-1 lg:order-2 lg:col-span-7">
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-sumi-light sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Pilares filosóficos */}
        <div ref={cardsRef} className="reveal mt-16 grid gap-6 sm:grid-cols-3">
          {about.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-matcha-100 bg-washi-50 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-matcha-200 hover:shadow-[0_24px_50px_-35px_rgba(95,122,107,0.6)]"
            >
              <span className="font-serif text-3xl text-matcha-500">{pillar.jp}</span>
              <h3 className="mt-3 text-lg font-semibold text-sumi">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sumi-muted">{pillar.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
