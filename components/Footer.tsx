"use client";

import { Scale } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-text)",
        padding: "var(--space-2xl) var(--space-xl) var(--space-xl)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-xl)",
            paddingBottom: "var(--space-xl)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "var(--space-xl)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-sm)",
                marginBottom: "var(--space-md)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Scale size={16} color="rgba(255,255,255,0.8)" />
              </div>
              <span
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                Atlas
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.4)",
                maxWidth: "260px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Le SaaS de gestion pour cabinets d&apos;avocats.
              <br />
              Lancement septembre 2026.
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-3xl)",
              flexWrap: "wrap",
            }}
          >
            <nav>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "var(--space-md)",
                }}
              >
                Produit
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                }}
              >
                {[
                  { label: "Fonctionnalités", href: "#features" },
                  { label: "Pourquoi Atlas", href: "#why" },
                  { label: "Liste d'attente", href: "#waitlist" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color var(--transition-fast)",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                      }
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "var(--space-md)",
                }}
              >
                Légal
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                }}
              >
                {[
                  { label: "Mentions légales", href: "#" },
                  { label: "Politique RGPD", href: "#" },
                  { label: "Contact", href: "mailto:contact@thomasviger.com" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color var(--transition-fast)",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                      }
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-md)",
          }}
        >
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.25)",
              margin: 0,
            }}
          >
            © {year} Atlas · Barreau de Rouen · Tous droits réservés
          </p>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.2)",
              margin: 0,
            }}
          >
            Conçu et développé par Thomas Viger
          </p>
        </div>
      </div>
    </footer>
  );
}
