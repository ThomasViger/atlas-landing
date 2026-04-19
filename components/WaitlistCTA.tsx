"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Accès anticipé au tarif Early Bird",
  "Participation à la phase bêta (été 2026)",
  "Votre avis influence le produit",
];

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      style={{
        padding: "var(--space-3xl) var(--space-xl)",
        background:
          "linear-gradient(160deg, #1E3A8A 0%, #1E40AF 60%, #1E3A8A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "var(--space-lg)",
          }}
        >
          Lancement septembre 2026
        </p>

        <h2
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "var(--space-lg)",
          }}
        >
          Réservez votre place parmi les premiers cabinets.
        </h2>

        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.7,
            marginBottom: "var(--space-2xl)",
          }}
        >
          Les avocats sur la liste d&apos;attente seront les premiers à accéder à Atlas,
          au meilleur tarif, et pourront influencer les fonctionnalités du lancement.
        </p>

        {/* Benefits */}
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-sm)",
            marginBottom: "var(--space-2xl)",
            listStyle: "none",
            padding: 0,
            textAlign: "left",
            maxWidth: "380px",
            margin: "0 auto var(--space-2xl)",
          }}
        >
          {benefits.map((b) => (
            <li
              key={b}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-md)",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <CheckCircle2
                size={16}
                style={{ flexShrink: 0, color: "#FDE68A" }}
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: "var(--space-sm)",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "var(--space-md)",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@cabinet.fr"
              required
              aria-label="Adresse email"
              style={{
                padding: "0.85rem 1.25rem",
                borderRadius: "var(--radius-sm)",
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.1)",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                color: "#ffffff",
                outline: "none",
                width: "300px",
                maxWidth: "100%",
                transition: "border-color var(--transition-fast), background var(--transition-fast)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
            />
            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-sm)",
                padding: "0.85rem 1.6rem",
                background: "var(--color-cta)",
                color: "#ffffff",
                border: "none",
                borderRadius: "var(--radius-sm)",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "background var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast)",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-cta-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(180,83,9,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-cta)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Je rejoins la liste
              <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div
            style={{
              padding: "1.25rem 2rem",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "var(--radius-md)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1rem",
              display: "inline-block",
              marginBottom: "var(--space-md)",
            }}
          >
            Parfait — vous êtes inscrit. À très bientôt.
          </div>
        )}

        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Aucun spam · Données protégées · RGPD conforme
        </p>
      </div>
    </section>
  );
}
