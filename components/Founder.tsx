"use client";

export default function Founder() {
  return (
    <section id="founder" style={{ position:"relative", padding:"110px 0" }}>
      {/* Ambient glow right */}
      <div aria-hidden style={{
        position:"absolute", top:"15%", right:-100,
        width:500, height:500, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="container">
        <div style={{
          display:"grid", gridTemplateColumns:"1fr 1fr",
          gap:72, alignItems:"center",
        }} className="founder-grid">

          {/* Left — profile card */}
          <div style={{
            position:"relative", borderRadius:20,
            background:"linear-gradient(145deg, rgba(22,37,66,0.9) 0%, rgba(10,20,40,0.85) 100%)",
            border:"1px solid var(--line-2)",
            padding:36,
            backdropFilter:"blur(16px)",
            overflow:"hidden",
          }}>
            {/* Top amber gradient border */}
            <div style={{
              position:"absolute", inset:-1, borderRadius:21, padding:1,
              background:"linear-gradient(145deg,rgba(245,158,11,0.3),transparent 50%)",
              WebkitMask:"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite:"xor", maskComposite:"exclude", pointerEvents:"none",
            }} />

            {/* Decorative rings */}
            {[200, 280].map(s => (
              <div key={s} aria-hidden style={{
                position:"absolute", bottom:`-${s/3}px`, right:`-${s/3}px`,
                width:s, height:s, borderRadius:"50%",
                border:"1px solid rgba(255,255,255,0.04)",
                pointerEvents:"none",
              }} />
            ))}

            {/* Avatar */}
            <div style={{
              width:72, height:72, borderRadius:"50%",
              background:"linear-gradient(145deg, rgba(30,50,90,0.9), rgba(15,27,51,0.9))",
              border:"1.5px solid rgba(245,158,11,0.3)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontFamily:"var(--serif)", fontSize:26, fontWeight:500, color:"var(--ink)",
              marginBottom:20,
              boxShadow:"0 0 24px rgba(245,158,11,0.15)",
            }}>TV</div>

            <h3 style={{
              fontFamily:"var(--serif)", fontSize:28,
              fontWeight:500, color:"var(--ink)",
              marginBottom:6, letterSpacing:"-0.01em",
            }}>Thomas Viger</h3>

            {[
              { icon:"💻", text:"Développeur indépendant" },
              { icon:"📍", text:"Rouen, Normandie" },
              { icon:"🗓", text:"Fondateur Atlas · lancement sept. 2026" },
            ].map(({ icon, text }) => (
              <div key={text} style={{
                display:"flex", alignItems:"center", gap:8,
                marginTop:8, fontSize:13.5, color:"var(--mute)",
              }}>
                <span style={{ fontSize:12 }}>{icon}</span>
                {text}
              </div>
            ))}

            <div style={{
              display:"inline-flex", marginTop:24,
              padding:"4px 14px", borderRadius:99,
              background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.25)",
              fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.1em",
              color:"var(--amber-2)", textTransform:"uppercase",
            }}>Fondateur &amp; Développeur</div>
          </div>

          {/* Right — quote */}
          <div>
            <span className="eyebrow">La genèse</span>

            {/* Large decorative quote */}
            <div aria-hidden style={{
              fontFamily:"var(--serif)", fontSize:96, lineHeight:0.7,
              color:"rgba(245,158,11,0.1)", marginTop:16, marginBottom:8,
              userSelect:"none",
            }}>&ldquo;</div>

            <blockquote style={{
              fontFamily:"var(--serif)", fontStyle:"italic",
              fontSize:"clamp(18px,2.4vw,26px)", fontWeight:500, lineHeight:1.5,
              color:"var(--ink)",
              borderLeft:"3px solid var(--amber)",
              paddingLeft:24, margin:"0 0 28px",
            }}>
              J&apos;ai vu des avocats passer leurs soirées à chercher un document, recalculer
              une échéance, relancer un client. Il y avait là un outil à construire.
            </blockquote>

            <p style={{
              fontSize:15, color:"var(--ink-2)", lineHeight:1.75, marginBottom:28,
            }}>
              Atlas naît d&apos;observations terrain, pas d&apos;une étude de marché. Chaque décision
              produit est validée avec des avocats du Barreau de Rouen, sur des cas réels —
              pas sur une hypothèse de startup.
            </p>

            <a href="#tarifs"
              className="btn btn-ghost"
              style={{ fontSize:14 }}>
              Suivre le lancement →
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
