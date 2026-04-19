"use client";

const year = new Date().getFullYear();

const cols = [
  {
    title: "Produit",
    links: [
      { label:"Modules",          href:"#modules" },
      { label:"Pourquoi Atlas",   href:"#vision" },
      { label:"Fondateur",        href:"#founder" },
      { label:"Liste d'attente",  href:"#tarifs" },
    ],
  },
  {
    title: "Cabinet",
    links: [
      { label:"Barreau de Rouen", href:"#" },
      { label:"Contact",          href:"mailto:contact@thomasviger.com" },
      { label:"Suivre le projet", href:"#" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label:"Mentions légales", href:"#" },
      { label:"Politique RGPD",   href:"#" },
      { label:"Confidentialité",  href:"#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{
      background:"#020811",
      borderTop:"1px solid rgba(255,255,255,0.06)",
      padding:"60px 0 28px",
    }}>
      <div className="container">
        {/* Top row */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"1.6fr repeat(3, 1fr)",
          gap:"2rem 3rem",
          paddingBottom:40,
          borderBottom:"1px solid rgba(255,255,255,0.05)",
          marginBottom:28,
        }} className="footer-grid">

          {/* Brand */}
          <div>
            {/* Logo */}
            <a href="#" style={{
              display:"inline-flex", alignItems:"center", gap:10,
              fontFamily:"var(--serif)", fontSize:22, letterSpacing:"-0.01em",
              marginBottom:16, color:"var(--ink)",
            }}>
              <span style={{
                width:28, height:28, borderRadius:7, position:"relative",
                background:"linear-gradient(145deg,#1a2a4a,#0a1428)",
                border:"1px solid var(--line-2)",
                display:"grid", placeItems:"center",
                boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(245,158,11,0.15)",
              }}>
                <span style={{
                  width:10, height:10, borderRadius:"50%",
                  background:"radial-gradient(circle at 30% 30%, #FBBF24, #F59E0B 60%, #7a4e05)",
                  boxShadow:"0 0 10px rgba(245,158,11,0.55)",
                  display:"block",
                }} />
              </span>
              Atlas
            </a>

            <p style={{
              fontSize:13, color:"var(--mute)", lineHeight:1.65, maxWidth:240, margin:"0 0 20px",
            }}>
              Le copilote pensé pour l&apos;avocat qui exerce seul. Rédaction, facturation, agenda, coffre-fort.
            </p>

            {/* Status badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"6px 12px", borderRadius:8,
              background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.2)",
              fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.08em",
              color:"var(--amber)",
            }}>
              <span style={{
                width:6, height:6, borderRadius:"50%",
                background:"var(--amber)", boxShadow:"0 0 6px rgba(245,158,11,0.8)",
                animation:"pulse 2s ease-in-out infinite",
              }} />
              BÊTA · SEPT 2026
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <nav key={col.title}>
              <p style={{
                fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.12em",
                textTransform:"uppercase", color:"var(--mute-2)", marginBottom:16,
              }}>{col.title}</p>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} style={{
                      fontSize:13.5, color:"var(--mute)",
                      transition:"color 0.15s",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--ink-2)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--mute)")}
                    >{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:12,
        }}>
          <p style={{
            fontFamily:"var(--mono)", fontSize:10.5, letterSpacing:"0.04em",
            color:"rgba(255,255,255,0.18)", margin:0,
          }}>
            © {year} Atlas · Barreau de Rouen · Tous droits réservés
          </p>
          <p style={{
            fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.04em",
            color:"rgba(255,255,255,0.1)", margin:0,
          }}>
            Conçu et développé par Thomas Viger
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
