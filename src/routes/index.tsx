import { createFileRoute } from "@tanstack/react-router";
import {
  MessageSquareText,
  ShieldCheck,
  LayoutTemplate,
  Users,
  BarChart3,
  Sparkles,
  Check,
  X,
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import hero3d from "@/assets/hero-3d.jpg";
import chat3d from "@/assets/chat-3d.jpg";
import metrics3d from "@/assets/metrics-3d.jpg";
import { AccessForm } from "@/components/landing/AccessForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mail AI — Crea y envía campañas de email con IA" },
      {
        name: "description",
        content:
          "Describe tu campaña en un chat y Mail AI la diseña, maqueta en HTML y la despacha con entregabilidad certificada. Pide acceso a la beta privada.",
      },
      { property: "og:title", content: "Mail AI — Crea y envía campañas de email con IA" },
      {
        property: "og:description",
        content:
          "La capa de inteligencia artificial que elimina el cuello de botella entre marketing y desarrollo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pilares = [
  {
    icon: MessageSquareText,
    title: "Adopción conversacional",
    text: "El usuario conversa con la IA y ella construye la plantilla en tiempo real. Sin curva de aprendizaje técnica.",
  },
  {
    icon: LayoutTemplate,
    title: "Autonomía de diseño",
    text: "Reutiliza plantillas, inserta imágenes corporativas y convierte todo en HTML limpio listo para la API.",
  },
  {
    icon: ShieldCheck,
    title: "Infraestructura aislada",
    text: "Tus cuentas de correo, segmentación por categorías y datos protegidos del núcleo de tu negocio.",
  },
];

const capacidades = [
  {
    icon: Sparkles,
    title: "Campañas creadas por chat",
    text: "La conversación se convierte en código HTML estructurado y con vista previa reactiva.",
  },
  {
    icon: Users,
    title: "Listas y categorías",
    text: "Segmentación precisa de audiencias con almacenamiento aislado y privacidad estricta.",
  },
  {
    icon: ShieldCheck,
    title: "Envíos certificados",
    text: "Cabeceras verificadas con SPF, DKIM y DMARC. Rebotes mínimos y bandeja principal.",
  },
  {
    icon: BarChart3,
    title: "Telemetría en vivo",
    text: "Aperturas, clics, conversiones y efectividad real de cada plantilla enviada.",
  },
];

const planes = [
  {
    name: "Free",
    price: "$0",
    note: "sin tarjeta de crédito",
    tag: "Puerta de entrada",
    items: ["300 contactos", "500 correos / mes", "30 mensajes de chat IA", "3 plantillas"],
  },
  {
    name: "Starter Pro",
    price: "$15",
    note: "USD / mes facturado anual",
    tag: "Freelancers y pymes",
    items: [
      "2.500 contactos",
      "5.000 correos / mes",
      "200 mensajes de chat IA",
      "Plantillas ilimitadas",
    ],
  },
  {
    name: "Business Team",
    price: "$47",
    note: "USD / mes facturado anual",
    tag: "Más popular",
    featured: true,
    items: [
      "5 usuarios con roles",
      "15.000 contactos",
      "50.000 correos / mes",
      "Subdominio verificado",
    ],
  },
  {
    name: "Enterprise",
    price: "$199",
    note: "a medida según volumen",
    tag: "Grandes empresas",
    items: ["Usuarios ilimitados", "IP dedicada + warmup", "API, webhooks y SSO", "SLA formal"],
  },
];

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Logo de Mail AI" width={36} height={36} className="h-9 w-9" />
            <span className="font-brand text-3xl leading-none text-primary">Mail AI</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a className="transition hover:text-primary" href="#solucion">
              Solución
            </a>
            <a className="transition hover:text-primary" href="#plataforma">
              Plataforma
            </a>
            <a className="transition hover:text-primary" href="#planes">
              Planes
            </a>
          </div>
          <a
            href="#acceso"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
          >
            Pedir acceso
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="grid-olive relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary uppercase">
              Beta privada · 15 empresas piloto
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight md:text-6xl">
              Habla con la IA.
              <br />
              <span className="text-gradient-gold font-brand text-6xl md:text-7xl">
                Ella envía tu campaña.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Mail AI elimina el cuello de botella entre marketing y desarrollo: describe tu
              objetivo en un chat y obtén plantillas HTML de alto impacto, listas para despachar con
              entregabilidad certificada.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#acceso"
                className="glow-primary rounded-2xl bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:brightness-105"
              >
                Pedir acceso
              </a>
              <a
                href="#solucion"
                className="rounded-2xl border border-border px-7 py-4 font-semibold transition hover:border-primary/60 hover:text-primary"
              >
                Ver cómo funciona
              </a>
            </div>
            </div>
          </div>
          <div className="relative">
            <div className="animate-float surface-3d overflow-hidden rounded-[2.5rem]">
              <img
                src={hero3d}
                alt="Sobre 3D amarillo flotando sobre fondo verde oliva"
                width={1200}
                height={1200}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problema / Solución */}
      <section id="solucion" className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-brand text-4xl text-primary">El problema y la solución</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Marketing no debería esperar a ingeniería para lanzar una campaña
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="surface-3d tilt-card rounded-3xl p-8">
            <h3 className="text-xl font-semibold">Hoy: dependencia técnica</h3>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              {[
                "Iteraciones de días entre marketing e ingeniería.",
                "Sin acceso directo para ajustar textos, imágenes o formatos.",
                "Riesgo de spam por certificados y estándares mal configurados.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-3d tilt-card rounded-3xl border-primary/30 p-8">
            <h3 className="text-xl font-semibold text-primary">Con Mail AI: segundos</h3>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              {[
                "Abstracción conversacional: describes y la IA diseña.",
                "Envíos certificados anti-spam con SPF, DKIM y DMARC.",
                "Plataforma desacoplada que protege tus sistemas centrales.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {pilares.map((p) => (
            <article key={p.title} className="surface-3d tilt-card rounded-3xl p-7">
              <div className="glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Plataforma */}
      <section id="plataforma" className="grid-olive border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="animate-float surface-3d overflow-hidden rounded-[2.5rem]">
              <img
                src={chat3d}
                alt="Burbujas de chat 3D representando la IA de Mail AI"
                loading="lazy"
                width={1008}
                height={1008}
                className="w-full"
              />
            </div>
            <div>
              <p className="font-brand text-4xl text-primary">La plataforma</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Todo lo que necesitas para crear, enviar y medir
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {capacidades.map((c) => (
                  <div key={c.title} className="surface-3d rounded-2xl p-5">
                    <c.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 font-semibold">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="font-brand text-4xl text-primary">Telemetría</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Métricas claras, decisiones rápidas
              </h2>
              <p className="mt-4 text-muted-foreground">
                Aperturas, clics, rebotes, mapa de calor y exportación de reportes. Cada campaña
                queda registrada en un historial auditable que puedes duplicar en un clic.
              </p>
            </div>
            <div className="animate-float surface-3d order-1 overflow-hidden rounded-[2.5rem] md:order-2">
              <img
                src={metrics3d}
                alt="Paneles y gráficas 3D del dashboard de Mail AI"
                loading="lazy"
                width={1008}
                height={1008}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-brand text-4xl text-primary">Planes</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Precios competitivos, margen blindado
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {planes.map((p) => (
            <article
              key={p.name}
              className={`surface-3d flex flex-col rounded-3xl p-7 ${
                p.featured ? "glow-primary border-primary/50" : ""
              }`}
            >
              <span className="text-xs tracking-wide text-primary uppercase">{p.tag}</span>
              <h3 className="mt-3 text-xl font-semibold">{p.name}</h3>
              <p className="mt-4 text-4xl font-extrabold">{p.price}</p>
              <p className="text-xs text-muted-foreground">{p.note}</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#acceso"
                className={`mt-8 rounded-2xl px-5 py-3 text-center text-sm font-semibold transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:brightness-105"
                    : "border border-border hover:border-primary/60 hover:text-primary"
                }`}
              >
                Pedir acceso
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Acceso */}
      <section id="acceso" className="grid-olive border-t border-border/60">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <p className="font-brand text-5xl text-primary">Pedir acceso</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Deja el Gmail de tu empresa y te abrimos la beta
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estamos incorporando 15 empresas piloto. Te enviamos el acceso y acompañamos tu primera
            campaña generada por IA.
          </p>
          <div className="mt-10 text-left">
            <AccessForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Logo de Mail AI" width={28} height={28} className="h-7 w-7" />
            <span className="font-brand text-2xl text-primary">Mail AI</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Mail AI Technologies. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
