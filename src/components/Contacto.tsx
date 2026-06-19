import { company, contact } from "../data/content";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Icon from "./ui/Icon";
import type { IconName } from "./ui/Icon";
import { useReveal } from "../hooks/useReveal";

interface ContactRow {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const rows: ContactRow[] = [
  { icon: "phone", label: "Teléfono", value: company.phone, href: company.phoneHref },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: company.whatsapp,
    href: company.whatsappHref,
    external: true,
  },
  { icon: "mail", label: "Correo", value: company.email, href: `mailto:${company.email}` },
  { icon: "pin", label: "Dirección", value: company.address },
  { icon: "clock", label: "Horario", value: company.hours },
];

export default function Contacto() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contacto" className="bg-matcha-50/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
          align="center"
        />

        <div ref={ref} className="reveal mt-16 grid gap-8 overflow-hidden rounded-3xl border border-matcha-100 bg-white/80 shadow-[0_40px_90px_-60px_rgba(95,122,107,0.6)] lg:grid-cols-2">
          {/* Datos de contacto */}
          <div className="p-8 sm:p-10">
            <ul className="space-y-6">
              {rows.map((row) => {
                const content = (
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-matcha-100 text-matcha-600">
                      <Icon name={row.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-zen text-sumi-muted">
                        {row.label}
                      </span>
                      <span className="mt-0.5 text-base text-sumi">{row.value}</span>
                    </span>
                  </span>
                );

                return (
                  <li key={row.label}>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.external ? "_blank" : undefined}
                        rel={row.external ? "noopener noreferrer" : undefined}
                        className="block rounded-xl transition-colors hover:bg-matcha-50"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-matcha-500 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-matcha-600 sm:w-auto"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Mapa */}
          <div className="relative min-h-[20rem] bg-matcha-100">
            <iframe
              title={`Ubicación de ${company.fullName}`}
              src={company.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
