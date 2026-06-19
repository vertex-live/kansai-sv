import type { IconName } from "../components/ui/Icon";

/**
 * Contenido editable del sitio de Kansai Ingeniería Clínica.
 * ⚠️ DATOS DE EJEMPLO: reemplazar teléfono, correo, dirección y redes por los
 * datos reales de la empresa antes de publicar.
 */

export const company = {
  name: "Kansai",
  fullName: "Kansai Ingeniería Clínica",
  tagline:
    "Tecnología médica y servicio de ingeniería clínica con precisión japonesa, al servicio de El Salvador.",
  // TODO: reemplazar por los datos reales de la empresa
  phone: "+503 0000-0000",
  phoneHref: "tel:+50300000000",
  whatsapp: "+503 0000-0000",
  whatsappHref: "https://wa.me/50300000000",
  email: "info@kansaiingenieria.com.sv",
  address: "San Salvador, El Salvador, C.A.",
  hours: "Lunes a viernes, 8:00 a. m. – 5:00 p. m.",
  // Embed genérico de San Salvador (sin API key). Reemplazar por la ubicación real.
  mapEmbedUrl:
    "https://www.google.com/maps?q=San%20Salvador%2C%20El%20Salvador&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=San+Salvador+El+Salvador",
};

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  kicker: "Ingeniería clínica · El Salvador",
  title: "Tecnología médica con precisión japonesa",
  subtitle:
    "Acompañamos a hospitales, clínicas y laboratorios en la adquisición, instalación y mantenimiento de su equipo médico, con la disciplina y la mejora continua (kaizen) que distingue al trabajo japonés.",
  primaryCta: { label: "Contáctanos", href: "#contacto" },
  secondaryCta: { label: "Nuestros servicios", href: "#servicios" },
  stats: [
    { value: "改善", label: "Kaizen · mejora continua" },
    { value: "100%", label: "Cobertura a nivel nacional" },
    { value: "24/7", label: "Soporte para equipos críticos" },
  ],
};

export const about = {
  eyebrow: "Nosotros",
  title: "Disciplina japonesa al servicio de la salud salvadoreña",
  paragraphs: [
    "Kansai Ingeniería Clínica es una empresa salvadoreña dedicada a la venta, instalación y mantenimiento de equipo médico para instituciones de salud públicas y privadas.",
    "Nuestro nombre se inspira en la región de Kansai, en Japón, y en su tradición de precisión, orden y mejora continua. Llevamos esa filosofía a cada proyecto: equipos confiables, procesos rigurosos y un acompañamiento cercano a lo largo de toda la vida útil de su tecnología.",
  ],
  // Pilares de la filosofía de la empresa.
  pillars: [
    {
      jp: "信頼",
      title: "Confianza",
      text: "Equipos de marcas reconocidas y procesos que cumplen estándares internacionales.",
    },
    {
      jp: "精度",
      title: "Precisión",
      text: "Instalación, calibración y mantenimiento con rigor técnico y trazabilidad.",
    },
    {
      jp: "改善",
      title: "Mejora continua",
      text: "Acompañamiento permanente para optimizar el desempeño de su equipo médico.",
    },
  ],
};

export interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export const services: {
  eyebrow: string;
  title: string;
  description: string;
  items: Service[];
} = {
  eyebrow: "Servicios",
  title: "Soluciones integrales de ingeniería clínica",
  description:
    "Desde la compra de su equipo hasta su operación segura y continua, lo acompañamos en cada etapa.",
  items: [
    {
      icon: "stethoscope",
      title: "Venta de equipo médico",
      description:
        "Equipos e instrumental para hospitales, clínicas y laboratorios, de marcas reconocidas a nivel mundial.",
    },
    {
      icon: "wrench",
      title: "Mantenimiento preventivo y correctivo",
      description:
        "Programas de mantenimiento que garantizan la operación continua, segura y prolongada de sus equipos.",
    },
    {
      icon: "install",
      title: "Instalación y puesta en marcha",
      description:
        "Instalación profesional, configuración y capacitación de su personal para un arranque sin contratiempos.",
    },
    {
      icon: "gauge",
      title: "Calibración y certificación",
      description:
        "Verificación, calibración y certificación del desempeño de su equipo conforme a normativa vigente.",
    },
    {
      icon: "parts",
      title: "Repuestos e insumos",
      description:
        "Suministro de repuestos originales y consumibles médicos para mantener su equipo siempre disponible.",
    },
    {
      icon: "consult",
      title: "Asesoría y consultoría",
      description:
        "Acompañamiento en la adquisición, renovación y gestión de la tecnología médica de su institución.",
    },
  ],
};

export const whyUs: {
  eyebrow: string;
  title: string;
  items: { icon: IconName; title: string; text: string }[];
} = {
  eyebrow: "¿Por qué elegirnos?",
  title: "Un socio técnico en quien confiar",
  items: [
    {
      icon: "precision",
      title: "Precisión japonesa",
      text: "Rigor y atención al detalle en cada instalación, calibración y servicio.",
    },
    {
      icon: "clock",
      title: "Respuesta rápida",
      text: "Soporte técnico oportuno en todo el país para minimizar tiempos de inactividad.",
    },
    {
      icon: "badge",
      title: "Personal certificado",
      text: "Ingenieros y técnicos especializados en tecnología biomédica.",
    },
    {
      icon: "handshake",
      title: "Compromiso a largo plazo",
      text: "Acompañamiento durante toda la vida útil de su equipo médico.",
    },
  ],
};

export const contact = {
  eyebrow: "Contacto",
  title: "Conversemos sobre su proyecto",
  description:
    "Cuéntenos qué necesita su institución y le responderemos con una propuesta a la medida.",
};

export const footer = {
  tagline: "Ingeniería clínica con precisión japonesa.",
  // TODO: enlazar redes sociales reales de la empresa.
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};
