"use client";

import {
  LayoutDashboard,
  FolderOpen,
  CalendarClock,
  FileText,
  Archive,
} from "lucide-react";

const modules = [
  {
    icon: LayoutDashboard,
    title: "Tableau de bord",
    description:
      "Chaque matin : vos dossiers prioritaires, les délais qui approchent, l'état de votre facturation. Un cockpit épuré qui vous donne la main en 30 secondes.",
    span: "col-span-2",
    accent: "#1E3A8A",
    bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    border: "#BFDBFE",
  },
  {
    icon: CalendarClock,
    title: "Agenda & Alertes",
    description:
      "Délais procéduraux, audiences, rendez-vous clients. Chaque échéance est visible, tracée, et ne peut plus vous échapper.",
    span: "col-span-1",
    accent: "#B45309",
    bg: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
    border: "#FDE68A",
  },
  {
    icon: FolderOpen,
    title: "Gestion des dossiers",
    description:
      "Créez, classez, retrouvez. Chaque dossier a son espace, ses pièces, sa chronologie. Fini les recherches de 20 minutes dans un arborescence Windows.",
    span: "col-span-1",
    accent: "#065F46",
    bg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    border: "#A7F3D0",
  },
  {
    icon: FileText,
    title: "Facturation PDF légal",
    description:
      "Notes d'honoraires conformes, envoyées depuis Atlas, relances automatiques. Le chiffre d'affaires que vous avez gagné — effectivement encaissé.",
    span: "col-span-1",
    accent: "#6D28D9",
    bg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    border: "#DDD6FE",
  },
  {
    icon: Archive,
    title: "Gestion documentaire",
    description:
      "Classement automatique, OCR, recherche plein texte. Vos documents sont là où vous les attendez — et où la loi exige qu'ils soient.",
    span: "col-span-2",
    accent: "#0E7490",
    bg: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
    border: "#A5F3FC",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "var(--space-3xl) var(--space-xl)",
        background: "var(--color-bg)",
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
            La solution
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
              margin: "0 auto var(--space-lg)",
            }}
          >
            Tout ce dont un cabinet a besoin. Rien de superflu.
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
            5 modules intégrés, conçus pour s&apos;apprendre en moins d&apos;une heure.
            Time-to-value dès le premier jour.
          </p>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-md)",
          }}
        >
          {modules.map(({ icon: Icon, title, description, span, accent, bg, border }) => (
            <div
              key={title}
              style={{
                gridColumn: span,
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-xl)",
                transition: "transform var(--transition-base), box-shadow var(--transition-base)",
                cursor: "default",
                overflow: "hidden",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${accent}22`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Decorative circle */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: `${accent}10`,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-sm)",
                  background: accent,
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
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
