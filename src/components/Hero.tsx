import { hero } from "../data/content";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Asanoha from "./motifs/Asanoha";
import Icon from "./ui/Icon";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-washi-50 via-washi to-matcha-50/40 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:flex lg:min-h-[88vh] lg:items-center"
    >
      {/* Texturas Zen de fondo — patrón asanoha difuminado hacia la esquina
          superior derecha para que no compita con el texto. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(140% 135% at 100% 0%, #000 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(140% 135% at 100% 0%, #000 0%, transparent 80%)",
        }}
      >
        <Asanoha scale={1.7} className="absolute inset-0 text-matcha-300/15" />
      </div>
      <div className="pointer-events-none absolute -right-24 -top-16 h-[34rem] w-[34rem] rounded-full bg-matcha-100/40 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Texto */}
          <div className="lg:col-span-7">
            <span className="eyebrow animate-fade-up">{hero.kicker}</span>
            <h1
              className="mt-5 text-4xl font-semibold leading-[1.1] text-sumi animate-fade-up sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              {hero.title}
            </h1>
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-sumi-light animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              {hero.subtitle}
            </p>
            <div
              className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Button href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Métricas */}
            <dl
              className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-matcha-100 pt-8 animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-2xl text-matcha-600 sm:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-sumi-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Ensō decorativo */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center">
              <div className="absolute inset-6 rounded-full bg-white/60 shadow-[0_30px_80px_-40px_rgba(95,122,107,0.5)] backdrop-blur-sm" />
              <img
                src="/green enso.png"
                alt="Ensō — círculo Zen, símbolo de KAN SAI"
                className="absolute h-[120%] w-[120%] object-contain drop-shadow-md"
              />
              <div className="absolute bottom-10 flex flex-col items-center">
                <span className="font-serif text-4xl text-matcha-700">関西</span>
                <span className="mt-2 text-xs uppercase tracking-zen text-sumi-muted">
                  KAN SAI
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </section>
  );
}
