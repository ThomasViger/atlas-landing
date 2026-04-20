"use client";

const diffs = [
  {
    roman: "I.",
    title: "Simple par design",
    body: "200 boutons dont vous utilisez 15% : c'est l'outil que vous subissez. Atlas est conçu pour être évident — chaque écran a un but, chaque clic est utile ou supprimé.",
    detail: "Aucune formation nécessaire",
  },
  {
    roman: "II.",
    title: "Conçu avec des avocats",
    body: "Pas d'une étude de marché. Conçu avec des avocats du Barreau de Rouen, sur des cas réels. Chaque décision produit vient d'un vrai besoin — pas d'une hypothèse.",
    detail: "Co-construit, pas imaginé",
  },
  {
    roman: "III.",
    title: "Évolutif dès le premier jour",
    body: "Commencez seul. Associez-vous demain. Atlas grandit avec votre cabinet — sans migration, sans disruption, sans perte de données.",
    detail: "Du solo à l'équipe",
  },
];

export default function WhyAtlas() {
  return (
    <section id="vision" style={{ position:"relative", padding:"110px 0" }}>
      {/* Grid bg */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none", opacity:0.3,
        backgroundImage:"linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)",
        backgroundSize:"64px 64px",
        maskImage:"radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
      }} />

      <div className="container">
        {/* Header */}
        <div className="section-head" style={{ textAlign:"left", margin:"0 0 72px" }}>
          <span className="eyebrow">Pourquoi Atlas</span>
          <h2 style={{ marginTop:20, maxWidth:560 }}>
            Pas un logiciel de plus.<br />
            <em style={{
              fontStyle:"italic",
              background:"linear-gradient(180deg,#FDE9B4,#F59E0B 70%,#b57a08)",
              WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent",
            }}>Un outil qui s&apos;efface.</em>
          </h2>
        </div>

        {/* Differentiators */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))",
          gap:16,
        }}>
          {diffs.map(d => (
            <div key={d.roman} style={{
              position:"relative", borderRadius:16, padding:32,
              background:"linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              border:"1px solid var(--line)",
              backdropFilter:"blur(8px)",
              overflow:"hidden",
            }}>
              {/* Amber gradient top-left corner */}
              <div style={{
                position:"absolute", inset:-1, borderRadius:17, padding:1,
                background:"linear-gradient(145deg,rgba(245,158,11,0.22),transparent 45%)",
                WebkitMask:"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite:"xor", maskComposite:"exclude", pointerEvents:"none",
              }} />

              {/* Roman numeral */}
              <div style={{
                fontFamily:"var(--serif)", fontStyle:"italic",
                fontSize:48, lineHeight:1, marginBottom:20,
                background:"linear-gradient(180deg,#FDE9B4,#F59E0B 60%,#b57a08)",
                WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent",
              }}>{d.roman}</div>

              {/* Title */}
              <h3 style={{
                fontFamily:"var(--serif)", fontSize:"clamp(20px,2.2vw,26px)",
                fontWeight:500, lineHeight:1.2, color:"var(--ink)", marginBottom:14,
              }}>{d.title}</h3>

              {/* Body */}
              <p style={{
                fontSize:14.5, color:"var(--ink-2)", lineHeight:1.65, marginBottom:24,
              }}>{d.body}</p>

              {/* Badge */}
              <div style={{
                display:"inline-flex", alignItems:"center", gap:6,
                padding:"5px 12px", borderRadius:99,
                background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.22)",
                fontFamily:"var(--mono)", fontSize:10.5, letterSpacing:"0.06em",
                color:"var(--amber-2)", textTransform:"uppercase",
              }}>{d.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
