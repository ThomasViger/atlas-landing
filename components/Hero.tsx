"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

const stats = [
  { value: "60%", label: "des avocats français encore sur Excel" },
  { value: "1j/sem", label: "perdue en tâches administratives" },
  { value: "Sept 2026", label: "lancement prévu" },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px var(--space-xl) var(--space-3xl)",
        background:
          "linear-gradient(160deg, #EFF6FF 0%, var(--color-bg) 40%, #FEF3C7 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(30,58,138,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "820px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-sm)",
            padding: "0.35rem 1rem",
            background: "rgba(30,58,138,0.08)",
            border: "1px solid rgba(30,58,138,0.18)",
            borderRadius: "999px",
            marginBottom: "var(--space-xl)",
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "var(--color-primary)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <ShieldCheck size={13} />
          Conçu par un avocat du Barreau de Rouen
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(2.6rem, 6vw, 4.25rem)",
            fontWeight: 600,
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
            lineHeight: 1.12,
            marginBottom: "var(--space-xl)",
          }}
        >
          On porte votre cabinet,
          <br />
          <em style={{ color: "var(--color-primary)", fontStyle: "italic" }}>
            vous plaidez.
          </em>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            fontWeight: 300,
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto var(--space-2xl)",
          }}
        >
          Atlas remplace Word, Excel et les post-it par une plateforme claire,
          évidente et immédiatement utile. Dossiers, délais, facturation,
          documents — tout au même endroit, sans formation.
        </p>

        {/* Waitlist form */}
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
                padding: "0.75rem 1.25rem",
                borderRadius: "var(--radius-sm)",
                border: "1.5px solid var(--color-border)",
                background: "#ffffff",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                color: "var(--color-text)",
                outline: "none",
                width: "280px",
                maxWidth: "100%",
                transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--color-primary)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,58,138,0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-sm)",
                padding: "0.75rem 1.5rem",
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
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(180,83,9,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-cta)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Rejoindre la liste d&apos;attente
              <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div
            style={{
              padding: "1rem 2rem",
              background: "rgba(30,58,138,0.06)",
              border: "1px solid rgba(30,58,138,0.2)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-primary)",
              fontWeight: 700,
              marginBottom: "var(--space-md)",
              display: "inline-block",
            }}
          >
            Parfait — vous êtes sur la liste. On vous contacte dès l&apos;ouverture.
          </div>
        )}

        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.78rem",
            color: "var(--color-text-muted)",
            marginBottom: "var(--space-3xl)",
          }}
        >
          Lancement septembre 2026 · Accès anticipé · Zéro spam
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-lg)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.78rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <div
          style={{
            width: "1.5px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--color-border), transparent)",
          }}
        />
      </div>
    </section>
  );
}
