"use client";
import { useEffect, useRef, useState } from "react";

const BARS = 48;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function GradientBars() {
  const bars = Array.from({ length: BARS }, (_, i) => ({
    delay: (Math.random() * 3).toFixed(2),
    dur:   (3 + Math.random() * 3).toFixed(2),
  }));
  return (
    <div style={{
      position:"absolute", inset:0, pointerEvents:"none",
      display:"flex", gap:3, padding:"0 8%",
      maskImage:"linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
    }}>
      {bars.map((b, i) => (
        <span key={i} style={{
          flex:1, borderRadius:99,
          background:"linear-gradient(180deg, transparent, rgba(245,158,11,0.18), transparent)",
          transformOrigin:"center",
          animation:`pulse ${b.dur}s ease-in-out infinite`,
          animationDelay:`-${b.delay}s`,
        }} />
      ))}
    </div>
  );
}

function HeroMock() {
  const rows = [
    { ref:"DOSS-2026-041", label:"Succession Lefèvre — mémoire en réplique",    status:"à signer", cls:"wait" },
    { ref:"DOSS-2026-038", label:"SCI du Château — rédaction des statuts",       status:"envoyé",   cls:"ok" },
    { ref:"DOSS-2026-047", label:"M. Durand c/ URSSAF — conclusions",            status:"nouveau",  cls:"new" },
    { ref:"DOSS-2026-039", label:"Bail commercial Rue de Rivoli",                status:"archivé",  cls:"ok" },
  ];
  const badge: Record<string,{bg:string;color:string}> = {
    wait:{ bg:"rgba(245,158,11,0.12)", color:"var(--amber-2)" },
    ok:  { bg:"rgba(34,197,94,0.12)",  color:"#86efac" },
    new: { bg:"rgba(148,163,255,0.12)",color:"#c7d2fe" },
  };
  return (
    <div style={{
      position:"relative", borderRadius:16,
      background:"linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",
      border:"1px solid var(--line)", padding:18,
      boxShadow:"0 40px 80px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)",
      backdropFilter:"blur(8px)",
    }}>
      {/* amber top border gradient */}
      <div style={{
        position:"absolute", inset:-1, borderRadius:17, padding:1,
        background:"linear-gradient(160deg,rgba(245,158,11,0.35),transparent 40%)",
        WebkitMask:"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite:"xor", maskComposite:"exclude", pointerEvents:"none",
      }} />
      {/* Tabs */}
      <div style={{ display:"flex", gap:6, paddingBottom:14, borderBottom:"1px solid var(--line)", marginBottom:14 }}>
        {["DOSSIERS","AGENDA","FACTURATION","COFFRE"].map((t,i) => (
          <span key={t} style={{
            fontSize:11.5, padding:"6px 10px", borderRadius:6,
            fontFamily:"var(--mono)", letterSpacing:"0.04em",
            background: i===0 ? "rgba(245,158,11,0.12)" : "transparent",
            color: i===0 ? "var(--amber-2)" : "var(--mute)",
          }}>{t}</span>
        ))}
      </div>
      {/* Rows */}
      {rows.map(r => (
        <div key={r.ref} style={{
          display:"grid", gridTemplateColumns:"1fr 2fr auto", gap:14,
          padding:"14px 6px", borderBottom:"1px dashed var(--line)",
          fontSize:13, alignItems:"center",
        }}>
          <span style={{ color:"var(--mute)", fontFamily:"var(--mono)", fontSize:11.5 }}>{r.ref}</span>
          <span style={{ color:"var(--ink)" }}>{r.label}</span>
          <span style={{
            padding:"3px 8px", borderRadius:99,
            fontFamily:"var(--mono)", fontSize:10.5, letterSpacing:"0.05em",
            ...badge[r.cls],
          }}>{r.status}</span>
        </div>
      ))}
      <div style={{
        display:"flex", justifyContent:"space-between",
        paddingTop:14, marginTop:8, borderTop:"1px solid var(--line)",
        fontFamily:"var(--mono)", fontSize:11, color:"var(--mute)",
      }}>
        <span>47 DOSSIERS ACTIFS</span>
        <span style={{ color:"var(--amber-2)" }}>● SYNC EN DIRECT</span>
      </div>
    </div>
  );
}

function WaitlistForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle"|"loading"|"success"|"error">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) { setState("error"); return; }
    setState("loading");
    setTimeout(() => setState("success"), 650);
  };

  return (
    <div>
      <form id={id} onSubmit={submit} noValidate
        className="waitlist"
        style={{ opacity: state==="success" ? 0.5 : 1, pointerEvents: state==="success" ? "none" : "auto" }}>
        <input type="email" name="email" placeholder="votre.email@cabinet.fr"
          aria-label="Adresse e-mail" autoComplete="email"
          value={email} onChange={e => { setEmail(e.target.value); if(state==="error") setState("idle"); }}
        />
        <button className="btn btn-primary" type="submit" disabled={state==="loading"}
          style={{ padding:"10px 16px", minWidth:140 }}>
          {state==="loading" ? (
            <span style={{ width:14, height:14, border:"2px solid rgba(26,16,0,0.3)", borderTopColor:"#1a1000",
              borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }} />
          ) : "Rejoindre la liste"}
          {state==="idle" && (
            <svg viewBox="0 0 16 16" fill="none" style={{ width:14, height:14 }}>
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </form>
      {state==="error" && <div className="form-error" style={{ display:"block" }}>Merci de saisir une adresse e-mail valide.</div>}
      {state==="success" && (
        <div className="form-success" style={{ display:"block" }}>
          ✓ Vous êtes inscrit. Nous vous écrirons avant l&apos;ouverture de la bêta.
        </div>
      )}
      <div className="form-meta">
        <div className="avatars">
          {["T","M","L","C"].map(l => <span key={l}>{l}</span>)}
        </div>
        <span><b style={{ color:"var(--ink)", fontWeight:500 }}>412</b> avocats inscrits · Barreaux de Paris, Lyon, Bordeaux</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header style={{ position:"relative", padding:"160px 0 120px", overflow:"hidden" }}>
      {/* Grid bg */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none", opacity:0.5,
        backgroundImage:"linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)",
        backgroundSize:"64px 64px",
        maskImage:"radial-gradient(ellipse at 50% 10%, black 40%, transparent 75%)",
      }} />
      <GradientBars />

      <div className="container">
        <div style={{
          display:"grid", gridTemplateColumns:"1.15fr .9fr",
          gap:80, alignItems:"center",
        }} className="hero-inner">
          {/* Left */}
          <div>
            <span className="eyebrow">Bêta privée · Rentrée 2026</span>
            <h1 style={{
              fontSize:"clamp(48px,6.4vw,84px)", lineHeight:1.02,
              letterSpacing:"-0.025em", margin:"24px 0 28px",
            }}>
              Le cabinet<br />ne vous attend plus.<br />
              <em style={{
                fontStyle:"italic",
                background:"linear-gradient(180deg,#FDE9B4,#F59E0B 70%,#b57a08)",
                WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent",
              }}>Atlas s&apos;en charge.</em>
            </h1>
            <p style={{ fontSize:18, color:"var(--ink-2)", maxWidth:540, marginBottom:36, lineHeight:1.55 }}>
              Atlas est le copilote pensé pour l&apos;avocat qui exerce seul. Rédaction, facturation, agenda, coffre-fort —{" "}
              <strong style={{ color:"var(--ink)", fontWeight:500 }}>un seul outil</strong>, conçu avec des avocats du Barreau de Rouen.
            </p>
            <WaitlistForm id="waitlist-hero" />
          </div>

          {/* Right: mock */}
          <div className="hidden md:block">
            <HeroMock />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:900px) {
          .hero-inner { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </header>
  );
}
