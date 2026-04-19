"use client";

/* ── Inline visualisations ──────────────────────────────────────────── */

function VizDoc() {
  const lines = [
    { w:"72%", dark: true },
    { w:"88%", dark: false },
    { w:"55%", dark: false },
    { w:"80%", dark: true },
    { w:"40%", dark: false },
    { w:"66%", dark: false },
    { w:"50%", dark: false },
  ];
  return (
    <div style={{
      marginTop:20, borderRadius:10,
      background:"rgba(255,255,255,0.03)", border:"1px solid var(--line)",
      padding:14,
    }}>
      {/* Doc header */}
      <div style={{
        display:"flex", alignItems:"center", gap:8, marginBottom:14,
        paddingBottom:12, borderBottom:"1px solid var(--line)",
      }}>
        <div style={{ width:8, height:8, borderRadius:"50%", background:"rgba(245,158,11,0.6)" }} />
        <div style={{ flex:1, height:7, borderRadius:4, background:"rgba(255,255,255,0.12)", width:"55%" }} />
        <div style={{
          fontFamily:"var(--mono)", fontSize:9, color:"var(--amber)",
          background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.2)",
          padding:"2px 6px", borderRadius:4,
        }}>BROUILLON</div>
      </div>
      {lines.map((l, i) => (
        <div key={i} style={{
          height:6, borderRadius:3, marginBottom:7,
          background: l.dark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
          width: l.w,
        }} />
      ))}
      {/* Suggestion chip */}
      <div style={{
        marginTop:12, display:"inline-flex", alignItems:"center", gap:6,
        padding:"4px 10px", borderRadius:6,
        background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.2)",
        fontFamily:"var(--mono)", fontSize:9, color:"var(--amber-2)",
      }}>
        <span style={{ opacity:0.7 }}>✦</span> Suggestion Atlas
      </div>
    </div>
  );
}

function VizCalendar() {
  const days = ["L","M","M","J","V","S","D"];
  const events = [
    { day:1, label:"Audience", amber:true },
    { day:3, label:"Délai", amber:false },
    { day:5, label:"RDV", amber:true },
  ];
  return (
    <div style={{ marginTop:18 }}>
      <div style={{
        display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:4, marginBottom:4,
      }}>
        {days.map(d => (
          <div key={d} style={{
            textAlign:"center", fontFamily:"var(--mono)",
            fontSize:9, color:"var(--mute)", padding:"2px 0",
          }}>{d}</div>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:4 }}>
        {Array.from({length:28}, (_,i) => {
          const ev = events.find(e => e.day === (i % 7) + 1 && i < 14);
          return (
            <div key={i} style={{
              height:26, borderRadius:5, display:"flex", alignItems:"center", justifyContent:"center",
              background: ev ? (ev.amber ? "rgba(245,158,11,0.25)" : "rgba(167,139,250,0.2)") : "rgba(255,255,255,0.04)",
              border: ev ? `1px solid ${ev.amber ? "rgba(245,158,11,0.4)" : "rgba(167,139,250,0.3)"}` : "1px solid transparent",
              fontFamily:"var(--mono)", fontSize:9,
              color: ev ? (ev.amber ? "var(--amber-2)" : "#c4b5fd") : "var(--mute-2)",
            }}>
              {i < 28 ? i + 1 : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VizVault() {
  const files = [
    { name:"Contrat_bail_2026.pdf",      size:"2.4 Mo", locked:true },
    { name:"Conclusions_Durand.docx",    size:"148 Ko", locked:false },
    { name:"PV_AGE_SCI_Château.pdf",     size:"890 Ko", locked:true },
    { name:"Facture_000412.pdf",         size:"56 Ko",  locked:false },
  ];
  return (
    <div style={{ marginTop:16, display:"flex", flexDirection:"column", gap:6 }}>
      {files.map(f => (
        <div key={f.name} style={{
          display:"flex", alignItems:"center", gap:10,
          padding:"8px 10px", borderRadius:8,
          background:"rgba(255,255,255,0.03)", border:"1px solid var(--line)",
        }}>
          <div style={{
            width:28, height:28, borderRadius:6, flexShrink:0,
            background: f.locked ? "rgba(245,158,11,0.1)" : "rgba(255,255,255,0.06)",
            border:`1px solid ${f.locked ? "rgba(245,158,11,0.2)" : "var(--line)"}`,
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:12,
          }}>{f.locked ? "🔒" : "📄"}</div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{
              fontFamily:"var(--mono)", fontSize:9.5, color:"var(--ink-2)",
              overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
            }}>{f.name}</div>
            <div style={{ fontFamily:"var(--mono)", fontSize:8.5, color:"var(--mute)", marginTop:2 }}>{f.size}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VizBill() {
  return (
    <div style={{
      marginTop:18, borderRadius:10,
      background:"rgba(255,255,255,0.03)", border:"1px solid var(--line)",
      padding:14,
    }}>
      <div style={{
        display:"flex", justifyContent:"space-between", alignItems:"flex-start",
        marginBottom:14, paddingBottom:12, borderBottom:"1px solid var(--line)",
      }}>
        <div>
          <div style={{ fontFamily:"var(--mono)", fontSize:9, color:"var(--mute)", marginBottom:4 }}>NOTE D&apos;HONORAIRES</div>
          <div style={{ fontFamily:"var(--serif)", fontSize:15, color:"var(--ink)" }}>M. Durand c/ URSSAF</div>
        </div>
        <div style={{
          fontFamily:"var(--mono)", fontSize:9, padding:"3px 8px", borderRadius:4,
          background:"rgba(34,197,94,0.12)", border:"1px solid rgba(34,197,94,0.25)",
          color:"#86efac",
        }}>PAYÉE</div>
      </div>
      {[
        { label:"Consultation (2h)", amount:"480 €" },
        { label:"Rédaction conclusions", amount:"1 200 €" },
        { label:"Audience", amount:"600 €" },
      ].map(row => (
        <div key={row.label} style={{
          display:"flex", justifyContent:"space-between",
          fontFamily:"var(--mono)", fontSize:9.5,
          color:"var(--mute)", marginBottom:6,
        }}>
          <span>{row.label}</span>
          <span style={{ color:"var(--ink-2)" }}>{row.amount}</span>
        </div>
      ))}
      <div style={{
        display:"flex", justifyContent:"space-between",
        paddingTop:10, marginTop:4, borderTop:"1px solid var(--line)",
        fontFamily:"var(--mono)", fontSize:11,
        color:"var(--amber-2)",
      }}>
        <span>TOTAL HT</span>
        <span>2 280 €</span>
      </div>
    </div>
  );
}

function VizBrief() {
  const tasks = [
    { done:true,  text:"Relire mémoire Lefèvre" },
    { done:false, text:"Appeler greffe TGI Rouen" },
    { done:false, text:"Envoyer devis SCI du Château" },
  ];
  return (
    <div style={{ marginTop:18 }}>
      <div style={{
        fontFamily:"var(--mono)", fontSize:9.5, color:"var(--amber)",
        letterSpacing:"0.1em", marginBottom:10, textTransform:"uppercase",
      }}>● Aujourd&apos;hui — {new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"short"})}</div>
      {tasks.map((t,i) => (
        <div key={i} style={{
          display:"flex", alignItems:"center", gap:10,
          padding:"9px 10px", marginBottom:6, borderRadius:8,
          background: t.done ? "rgba(34,197,94,0.06)" : "rgba(255,255,255,0.03)",
          border:`1px solid ${t.done ? "rgba(34,197,94,0.18)" : "var(--line)"}`,
        }}>
          <div style={{
            width:14, height:14, borderRadius:"50%", flexShrink:0,
            border:`1.5px solid ${t.done ? "rgba(34,197,94,0.7)" : "var(--line-2)"}`,
            background: t.done ? "rgba(34,197,94,0.2)" : "transparent",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:8, color:"#86efac",
          }}>{t.done ? "✓" : ""}</div>
          <span style={{
            fontFamily:"var(--mono)", fontSize:10, color: t.done ? "var(--mute)" : "var(--ink-2)",
            textDecoration: t.done ? "line-through" : "none",
          }}>{t.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Bento cells ─────────────────────────────────────────────────────── */

export default function Features() {
  return (
    <section id="modules" style={{ position:"relative", padding:"110px 0" }}>
      {/* Subtle glow */}
      <div aria-hidden style={{
        position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)",
        width:700, height:500, borderRadius:"50%",
        background:"radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="container">
        {/* Header */}
        <div className="section-head">
          <span className="eyebrow">La solution</span>
          <h2 style={{ marginTop:20 }}>Tout ce dont un cabinet a besoin.<br />Rien de superflu.</h2>
          <p>5 modules intégrés, pensés pour s&apos;apprendre en moins d&apos;une heure. Time-to-value dès le premier jour.</p>
        </div>

        {/* 6-column bento */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(6, 1fr)",
          gridTemplateRows:"auto auto",
          gap:12,
        }} className="bento-grid">

          {/* A — Rédaction (span 4, row 2) */}
          <div style={{
            gridColumn:"1 / 5", gridRow:"1 / 3",
            ...cellStyle("rgba(245,158,11,0.08)", "rgba(245,158,11,0.18)"),
          }}>
            <CellTag color="var(--amber)" label="Rédaction" />
            <h3 style={cellTitle}>Rédigez 3× plus vite avec les bons modèles</h3>
            <p style={cellBody}>
              Conclusions, assignations, contrats — Atlas propose des trames adaptées à votre dossier.
              Plus jamais de page blanche.
            </p>
            <VizDoc />
          </div>

          {/* B — Agenda (span 2) */}
          <div style={{
            gridColumn:"5 / 7", gridRow:"1 / 2",
            ...cellStyle("rgba(167,139,250,0.07)", "rgba(167,139,250,0.18)"),
          }}>
            <CellTag color="#c4b5fd" label="Agenda & Alertes" />
            <h3 style={cellTitle}>Zéro délai oublié</h3>
            <p style={cellBody}>Audiences, forclusions, rendez-vous — chaque échéance est tracée et notifiée.</p>
            <VizCalendar />
          </div>

          {/* C — Coffre-fort (span 2) */}
          <div style={{
            gridColumn:"5 / 7", gridRow:"2 / 3",
            ...cellStyle("rgba(56,189,248,0.07)", "rgba(56,189,248,0.18)"),
          }}>
            <CellTag color="#7dd3fc" label="Coffre-fort" />
            <h3 style={cellTitle}>Vos pièces, au chaud</h3>
            <p style={cellBody}>Coffre sécurisé conforme RGPD. OCR et recherche plein texte.</p>
            <VizVault />
          </div>

          {/* D — Facturation (span 3) */}
          <div style={{
            gridColumn:"1 / 4", gridRow:"3 / 4",
            ...cellStyle("rgba(34,197,94,0.07)", "rgba(34,197,94,0.18)"),
          }}>
            <CellTag color="#86efac" label="Facturation" />
            <h3 style={cellTitle}>Notes d&apos;honoraires conformes, relances automatiques</h3>
            <p style={cellBody}>PDF légaux en un clic. Le chiffre d&apos;affaires que vous avez gagné — effectivement encaissé.</p>
            <VizBill />
          </div>

          {/* E — Brief matinal (span 3) */}
          <div style={{
            gridColumn:"4 / 7", gridRow:"3 / 4",
            ...cellStyle("rgba(245,158,11,0.07)", "rgba(245,158,11,0.15)"),
          }}>
            <CellTag color="var(--amber-2)" label="Brief matinal" />
            <h3 style={cellTitle}>Votre journée en 30 secondes</h3>
            <p style={cellBody}>Priorités du jour, dossiers urgents, délais proches — un cockpit qui vous donne la main avant même votre premier café.</p>
            <VizBrief />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .bento-grid > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */

function cellStyle(bg: string, borderColor: string): React.CSSProperties {
  return {
    position:"relative",
    borderRadius:14,
    padding:24,
    background:`linear-gradient(160deg, ${bg} 0%, rgba(255,255,255,0.015) 100%)`,
    border:`1px solid ${borderColor}`,
    backdropFilter:"blur(8px)",
    overflow:"hidden",
  };
}

function CellTag({ color, label }: { color: string; label: string }) {
  return (
    <div style={{
      display:"inline-flex", alignItems:"center", gap:6,
      marginBottom:12,
    }}>
      <span style={{
        fontFamily:"var(--mono)", fontSize:10, letterSpacing:"0.1em",
        textTransform:"uppercase", color,
      }}>{label}</span>
    </div>
  );
}

const cellTitle: React.CSSProperties = {
  fontFamily:"var(--serif)", fontSize:"clamp(16px,1.8vw,20px)",
  fontWeight:500, lineHeight:1.25, color:"var(--ink)", marginBottom:8,
};

const cellBody: React.CSSProperties = {
  fontSize:13.5, color:"var(--ink-2)", lineHeight:1.6, margin:0,
};
