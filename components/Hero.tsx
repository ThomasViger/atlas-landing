"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const BAR_COUNT = 18;

function GradientBars() {
  const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
    const pos = i / (BAR_COUNT - 1);
    const dist = Math.abs(pos - 0.5);
    const h = 0.18 + Math.pow(dist * 2, 1.3) * 0.82;
    const delay = (i * 0.11).toFixed(2);
    return { h, delay };
  });

  return (
    <div aria-hidden style={{
      position: "absolute", inset: 0, zIndex: 0,
      display: "flex", overflow: "hidden",
    }}>
      {bars.map(({ h, delay }, i) => (
        <div key={i} style={{
          flex: "1 0 0",
          height: "100%",
          background: `linear-gradient(to top, rgba(245,158,11,0.35), rgba(59,130,246,0.08), transparent)`,
          transform: `scaleY(${h})`,
          transformOrigin: "bottom",
          animation: `pulseBar 2.8s ease-in-out infinite alternate`,
          animationDelay: `${delay}s`,
          ["--bar-h" as string]: h,
        }} />
      ))}
    </div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1400);
  };

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
      background: "var(--bg)",
    }}>
      {/* Grid */}
      <div className="grid-bg" aria-hidden style={{ position:"absolute", inset:0, zIndex:0 }} />
      {/* Bars */}
      <GradientBars />
      {/* Radial vignette */}
      <div aria-hidden style={{
        position:"absolute", inset:0, zIndex:1,
        background:"radial-gradient(ellipse 80% 60% at 50% 100%, transparent 0%, var(--bg) 75%)",
      }} />
      {/* Top fade */}
      <div aria-hidden style={{
        position:"absolute", top:0, left:0, right:0, height:"220px", zIndex:1,
        background:"linear-gradient(to bottom, var(--bg) 0%, transparent 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 780, width: "100%", margin: "0 auto",
        padding: "120px 1.5rem 5rem",
        textAlign: "center",
        animation: "fadeUp 0.9s ease both",
      }}>
        {/* Badge */}
        <div style={{ marginBottom: "2rem", display:"flex", justifyContent:"center" }}>
          <span className="pill">
            <ShieldCheck size={11} style={{ color: "var(--cta)" }} />
            Conçu par un avocat du Barreau de Rouen
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: "clamp(2.8rem, 7vw, 5rem)",
          fontWeight: 600,
          marginBottom: "1.5rem",
          lineHeight: 1.08,
        }}>
          <span className="gradient-text">On porte votre cabinet,</span>
          <br />
          <em className="gradient-text-amber" style={{ fontStyle:"italic" }}>vous plaidez.</em>
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(1rem, 2vw, 1.15rem)",
          fontWeight: 300,
          color: "var(--text-muted)",
          lineHeight: 1.75,
          maxWidth: 560, margin: "0 auto 2.5rem",
          animation: "fadeUp 0.9s 0.15s ease both",
        }}>
          Atlas remplace Word, Excel et les post-it par un outil évident et immédiatement utile.
          Dossiers, délais, facturation, documents — sans formation, sans usine à gaz.
        </p>

        {/* Form */}
        <div style={{ animation:"fadeUp 0.9s 0.3s ease both" }}>
          {!done ? (
            <form onSubmit={handleSubmit} style={{
              display: "flex", gap: "0.6rem",
              justifyContent: "center", flexWrap: "wrap",
              marginBottom: "1rem",
            }}>
              <input
                type="email" value={email} required
                onChange={e => setEmail(e.target.value)}
                placeholder="votre@cabinet.fr"
                aria-label="Adresse email"
                className="input-dark"
                style={{ width: 260, maxWidth: "100%" }}
              />
              <button type="submit" className="btn-cta" disabled={loading} style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}>
                {loading ? (
                  <span style={{
                    width:16, height:16, border:"2px solid rgba(0,0,0,0.3)",
                    borderTopColor:"#0A0A0A", borderRadius:"50%",
                    display:"inline-block",
                    animation:"spinCW 0.7s linear infinite",
                  }} />
                ) : (
                  <>Rejoindre la liste <ArrowRight size={15} /></>
                )}
              </button>
            </form>
          ) : (
            <div style={{
              display:"inline-block",
              padding:"0.85rem 2rem",
              background:"rgba(245,158,11,0.1)",
              border:"1px solid rgba(245,158,11,0.3)",
              borderRadius:"999px",
              color:"#FCD34D",
              fontFamily:"'Inter',sans-serif",
              fontWeight:600,
              fontSize:"0.9rem",
              marginBottom:"1rem",
              animation:"fadeIn 0.4s ease",
            }}>
              Parfait — vous êtes sur la liste. À très bientôt.
            </div>
          )}

          <p style={{
            fontFamily:"'Inter',sans-serif", fontSize:"0.72rem",
            color:"var(--text-dim)", letterSpacing:"0.03em",
          }}>
            Lancement septembre 2026 &nbsp;·&nbsp; Zéro spam &nbsp;·&nbsp; RGPD conforme
          </p>
        </div>

        {/* Stats */}
        <div style={{
          marginTop: "4rem",
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: "1.5rem", maxWidth: 520, marginLeft:"auto", marginRight:"auto",
          animation:"fadeUp 0.9s 0.45s ease both",
        }}>
          {[
            { v: "60%",       l: "des avocats encore sur Excel" },
            { v: "1j/sem",    l: "perdue en tâches admin" },
            { v: "Sept 2026", l: "lancement prévu" },
          ].map(s => (
            <div key={s.v}>
              <div style={{
                fontFamily:"'EB Garamond',Georgia,serif",
                fontSize:"clamp(1.5rem,3vw,2.1rem)",
                fontWeight:600,
                lineHeight:1,
                marginBottom:"0.25rem",
              }} className="gradient-text-amber">{s.v}</div>
              <div style={{
                fontFamily:"'Inter',sans-serif", fontSize:"0.73rem",
                color:"var(--text-muted)", lineHeight:1.4,
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div aria-hidden style={{
        position:"absolute", bottom:0, left:0, right:0, height:"1px", zIndex:2,
        background:"linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
      }} />
    </section>
  );
}
