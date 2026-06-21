import { useEffect, useState } from "react";
import { company, nav } from "../data/content";
import Container from "./ui/Container";
import Icon from "./ui/Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-matcha-100/70 bg-washi/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        {/* Marca */}
        <a href="#inicio" className="group flex items-center gap-3" aria-label="KAN SAI — inicio">
          <img src="/green enso.png" alt="" className="h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-12" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-wide text-sumi">
              {company.name}
            </span>
            <span className="text-[0.62rem] uppercase tracking-zen text-matcha-600">
              Ingeniería Clínica
            </span>
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-sumi-light transition-colors hover:text-matcha-600 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-matcha-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-matcha-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-matcha-600"
          >
            WhatsApp
          </a>
        </nav>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sumi transition-colors hover:bg-matcha-50 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden border-t border-matcha-100/70 bg-washi/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-sumi-light transition-colors hover:bg-matcha-50 hover:text-matcha-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-matcha-500 px-3 py-3 text-center text-base font-medium text-white"
          >
            Escríbenos por WhatsApp
          </a>
        </Container>
      </div>
    </header>
  );
}
