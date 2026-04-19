import { Scale, MapPin, Calendar } from "lucide-react";

export default function Founder() {
  return (
    <section
      id="founder"
      style={{
        padding: "var(--space-3xl) var(--space-xl)",
        background: "var(--color-bg)",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-3xl)",
          alignItems: "center",
        }}
      >
        {/* Left — identity card */}
        <div
          style={{
            background: "linear-gradient(145deg, #1E3A8A 0%, #1E40AF 100%)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-2xl)",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative seal */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: "-30px",
              right: "-30px",
              width: "160px",
              height: "160px",
              border: "2px solid rgba(255,255,255,0.08)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: "-50px",
              right: "-50px",
              width: "200px",
              height: "200px",
              border: "2px solid rgba(255,255,255,0.04)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* Avatar placeholder */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "var(--space-lg)",
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "1.75rem",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            TV
          </div>

          <h3
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "var(--space-sm)",
              color: "#ffffff",
            }}
          >
            Thomas Viger
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              marginBottom: "var(--space-xl)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <Scale size={13} />
              Avocat au Barreau de Rouen
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <MapPin size={13} />
              Rouen, Normandie
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <Calendar size={13} />
              Fondateur d&apos;Atlas, lancement sept. 2026
            </div>
          </div>

          <div
            style={{
              padding: "0.5rem 1rem",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "var(--radius-sm)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            Fondateur &amp; Avocat
          </div>
        </div>

        {/* Right — quote */}
        <div>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-lg)",
            }}
          >
            La genèse
          </p>

          <blockquote
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 500,
              fontStyle: "italic",
              color: "var(--color-text)",
              lineHeight: 1.5,
              borderLeft: "3px solid var(--color-cta)",
              paddingLeft: "var(--space-lg)",
              margin: "0 0 var(--space-xl)",
            }}
          >
            &ldquo;J&apos;ai passé trop de soirées à chercher un document, recalculer
            une échéance, relancer un client. Ce n&apos;est pas pour ça que je suis
            devenu avocat. Atlas, c&apos;est l&apos;outil que j&apos;aurais voulu avoir.&rdquo;
          </blockquote>

          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
            }}
          >
            Atlas naît d&apos;une frustration réelle, vécue de l&apos;intérieur. Pas d&apos;une
            étude de marché. Ce qui garantit que chaque décision de produit
            vient d&apos;un vrai besoin d&apos;avocat — pas d&apos;une hypothèse.
          </p>
        </div>
      </div>
    </section>
  );
}
