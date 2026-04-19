"use client";

import { AlertTriangle, Receipt, UserX } from "lucide-react";

const pains = [
  {
    icon: AlertTriangle,
    title: "Le délai oublié",
    body:
      "Une forclusion, une radiation. La perte définitive du droit d'agir. Parce que l'alerte était dans un Excel que vous n'avez pas ouvert ce matin-là.",
    color: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
  },
  {
    icon: Receipt,
    title: "La facturation négligée",
    body:
      "Des honoraires qui traînent, des relances jamais envoyées, une trésorerie sous pression. Le travail est fait — mais pas payé.",
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  {
    icon: UserX,
    title: "L'isolement professionnel",
    body:
      "Pas de collègue à qui demander un avis, pas de filet. L'avocat solo porte tout — et souvent seul, à 22h, devant un dossier qui dépasse.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
];

export default function Problem() {
  return (
    <section
      id="why"
      style={{
        background: "var(--color-bg-alt)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "var(--space-3xl) var(--space-xl)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
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
            Le problème
          </p>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: "680px",
              margin: "0 auto var(--space-lg)",
            }}
          >
            60% des avocats français travaillent encore avec Word, Excel et des post-it.
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Ce n&apos;est pas un manque de sérieux. C&apos;est que les outils disponibles sont
            soit introuvables, soit des usines à gaz. Résultat : une journée
            par semaine perdue en tâches non-juridiques.
          </p>
        </div>

        {/* Pain cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-lg)",
          }}
        >
          {pains.map(({ icon: Icon, title, body, color, bg, border }) => (
            <div
              key={title}
              style={{
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-xl)",
                transition: "transform var(--transition-base), box-shadow var(--transition-base)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-sm)",
                  background: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--space-lg)",
                }}
              >
                <Icon size={20} color="#ffffff" />
              </div>
              <h3
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "1.3rem",
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
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
