import { company, footer, nav } from "../data/content";
import Container from "./ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-matcha-100 bg-washi">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <a href="#inicio" className="flex items-center gap-3" aria-label="KAN SAI — inicio">
              <img src="/green enso.png" alt="" className="h-9 w-9 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-sumi">
                  {company.name}
                </span>
                <span className="text-[0.62rem] uppercase tracking-zen text-matcha-600">
                  Ingeniería Clínica
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sumi-muted">
              {footer.tagline}
            </p>
          </div>

          {/* Enlaces */}
          <nav aria-label="Pie de página">
            <h2 className="text-xs uppercase tracking-zen text-sumi-muted">Navegación</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-sumi-light transition-colors hover:text-matcha-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto rápido + redes */}
          <div>
            <h2 className="text-xs uppercase tracking-zen text-sumi-muted">Contacto</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-sumi-light">
              <li>
                <a href={company.phoneHref} className="transition-colors hover:text-matcha-600">
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-matcha-600"
                >
                  {company.email}
                </a>
              </li>
              <li className="text-sumi-muted">{company.address}</li>
            </ul>

            <ul className="mt-5 flex gap-4">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sumi-light transition-colors hover:text-matcha-600"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-matcha-100 pt-6 text-xs text-sumi-muted sm:flex-row">
          <p>
            © {year} {company.fullName}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="font-serif text-matcha-600">改善</span>
            Hecho con precisión en El Salvador
          </p>
        </div>
      </Container>
    </footer>
  );
}
