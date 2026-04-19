"use client";

import { Zap, Building2, Brain } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Anti-usine à gaz",
    body:
      "200 boutons dont vous utilisez 15% : c'est l'outil que vous subissez. Atlas est conçu pour être évident — pas puissant. Chaque clic est utile ou supprimé.",
    quote: "Aucune formation nécessaire",
  },
  {
    icon: Brain,
    title: "Gestion d'abord, IA ensuite",
    body:
      "Les fondations d'abord : solides, fiables, conformes. L'IA vient amplifier ce qui fonctionne déjà — OCR, suggestions contextuelles, chronologie automatique.",
    quote: "Crédibilité par la fiabilité",
  },
  {
    icon: Building2,
    title: "Du solo à l'équipe",
    body:
      "Commencez seul. Associez-vous demain. Atlas grandit avec votre cabinet — sans migration, sans disruption, sans reformat de vos données.",
    quote: "Time-to-value dès le jour 1",
  },
];

export default function WhyAtlas() {
  return (
    <section
      id="why-atlas"
      style={{
        background: "var(--color-bg-alt)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "var(--space-3xl) var(--space-xl)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-md)",
            }}
          >
            Pourquoi Atlas
          </p>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Pas un logiciel de plus. Un outil qui s&apos;efface pour vous laisser plaider.
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-lg)",
          }}
        >
          {differentiators.map(({ icon: Icon, title, body, quote }) => (
            <div
              key={title}
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-xl)",
                transition: "transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "var(--shadow-hover)";
                el.style.borderColor = "rgba(30,58,138,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--color-border)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(30,58,138,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--space-lg)",
                }}
              >
                <Icon size={22} color="var(--color-primary)" />
              </div>
              <h3
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  marginBottom: "var(--space-md)",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.92rem",
                  fontWeight: 300,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-lg)",
                }}
              >
                {body}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.3rem 0.8rem",
                  background: "rgba(30,58,138,0.06)",
                  borderRadius: "999px",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  letterSpacing: "0.03em",
                }}
              >
                {quote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
