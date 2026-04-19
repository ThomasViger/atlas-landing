"use client";

const pains = [
  {
    num: "01",
    tag: "FACTURATION",
    headline: "Relancer, oublier, relancer encore.",
    body: "Des honoraires qui traînent, des clients silencieux, une trésorerie sous pression. Le travail est fait — mais pas encaissé.",
    stat: "62%",
    statLabel: "des honoraires sont relancés manuellement",
    color: "rgba(245,158,11,0.9)",
    glow: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.18)",
  },
  {
    num: "02",
    tag: "RÉDACTION",
    headline: "Recommencer chaque acte depuis zéro.",
    body: "Pas de modèle. Pas de contexte sauvegardé. Chaque assignation, chaque conclusion repart d'une page blanche.",
    stat: "14h",
    statLabel: "par semaine perdues en tâches non-juridiques",
    color: "rgba(167,139,250,0.9)",
    glow: "rgba(167,139,250,0.07)",
    border: "rgba(167,139,250,0.18)",
  },
  {
    num: "03",
    tag: "DISPERSION",
    headline: "Sept outils, aucun qui se parle.",
    body: "Word, Excel, Dropbox, Outlook, un logiciel de compta, un gestionnaire d'agenda. Des silos qui vous coûtent une heure par jour.",
    stat: "7.2",
    statLabel: "outils différents en moyenne par cabinet solo",
    color: "rgba(56,189,248,0.9)",
    glow: "rgba(56,189,248,0.07)",
    border: "rgba(56,189,248,0.18)",
  },
];

export default function Problem() {
  return (
    <section id="pains" style={{ position:"relative", padding:"110px 0" }}>
      {/* Ambient glow */}
      <div aria-hidden style={{
        position:"absolute", top:0, left:"50%", transform:"translateX(-50%)",
        width:800, height:600,
        background:"radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.05) 0%, transparent 65%)",
        pointerEvents:"none",
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ maxWidth:640, marginBottom:72 }}>
          <span className="eyebrow">Le problème</span>
          <h2 style={{
            fontSize:"clamp(36px,4.4vw,56px)", lineHeight:1.08,
            letterSpacing:"-0.022em", margin:"20px 0 18px",
          }}>
            L&apos;avocat solo porte tout.<br />
            <em style={{
              fontStyle:"italic",
              background:"linear-gradient(180deg,#FDE9B4,#F59E0B 70%,#b57a08)",
              WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent",
            }}>Souvent seul, sans outil adapté.</em>
          </h2>
          <p style={{ fontSize:17, color:"var(--ink-2)", lineHeight:1.6, margin:0 }}>
            60% des avocats français travaillent encore avec Word, Excel et des post-it —
            pas par manque de sérieux, mais par manque d&apos;un outil taillé pour leur réalité.
          </p>
        </div>

        {/* Pain cards */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",
          gap:16,
        }}>
          {pains.map(p => (
            <div key={p.num} style={{
              position:"relative", borderRadius:16, padding:28,
              background:`linear-gradient(160deg, ${p.glow} 0%, rgba(255,255,255,0.02) 100%)`,
              border:`1px solid ${p.border}`,
              backdropFilter:"blur(8px)",
              overflow:"hidden",
            }}>
              {/* Large number watermark */}
              <div aria-hidden style={{
                position:"absolute", top:-8, right:20,
                fontFamily:"var(--serif)", fontSize:120, fontWeight:500, lineHeight:1,
                color:"rgba(255,255,255,0.025)", userSelect:"none", pointerEvents:"none",
                letterSpacing:"-0.04em",
              }}>{p.num}</div>

              {/* Tag */}
              <div style={{
                display:"inline-flex", alignItems:"center", gap:8,
                marginBottom:20,
              }}>
                <span style={{
                  fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.14em",
                  textTransform:"uppercase", color:p.color,
                }}>{p.num} · {p.tag}</span>
              </div>

              {/* Headline */}
              <h3 style={{
                fontFamily:"var(--serif)", fontSize:"clamp(18px,2vw,22px)",
                fontWeight:500, lineHeight:1.25,
                color:"var(--ink)", marginBottom:12,
              }}>{p.headline}</h3>

              {/* Body */}
              <p style={{
                fontSize:14, color:"var(--ink-2)", lineHeight:1.65,
                marginBottom:28,
              }}>{p.body}</p>

              {/* Stat */}
              <div style={{
                paddingTop:20,
                borderTop:`1px solid ${p.border}`,
              }}>
                <div style={{
                  fontFamily:"var(--serif)", fontStyle:"italic",
                  fontSize:"clamp(40px,5vw,54px)", lineHeight:1,
                  color:p.color, marginBottom:6,
                }}>{p.stat}</div>
                <div style={{
                  fontFamily:"var(--mono)", fontSize:11, letterSpacing:"0.06em",
                  color:"var(--mute)", textTransform:"uppercase",
                }}>{p.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #pains .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
