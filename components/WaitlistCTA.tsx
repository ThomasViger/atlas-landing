"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const perks = [
  "Accès anticipé à la bêta (été 2026)",
  "Tarif Early Bird garanti à vie",
  "Votre avis influence les fonctionnalités du lancement",
];

const TOTAL = 500;
const COUNT = 412;

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle"|"loading"|"success"|"error">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) { setState("error"); return; }
    setState("loading");
    setTimeout(() => setState("success"), 650);
  };

  return (
    <section id="tarifs" style={{ position:"relative", padding:"120px 0" }}>
      {/* Background grid */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)",
        backgroundSize:"64px 64px",
        maskImage:"radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
        opacity:0.4,
      }} />
      {/* Amber glow center */}
      <div aria-hidden style={{
        position:"absolute", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)",
        width:700, height:500, borderRadius:"50%",
        background:"radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 65%)",
        pointerEvents:"none",
      }} />

      <div className="container">
        <div style={{
          position:"relative", maxWidth:680,
          margin:"0 auto",
        }}>
          {/* Card with gradient border */}
          <div style={{
            position:"relative", borderRadius:20,
            padding:"52px 48px",
            background:"linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter:"blur(12px)",
          }}>
            {/* Gradient border via mask */}
            <div style={{
              position:"absolute", inset:-1, borderRadius:21, padding:1,
              background:"linear-gradient(145deg, rgba(245,158,11,0.6), rgba(245,158,11,0.15) 50%, rgba(255,255,255,0.06))",
              WebkitMask:"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite:"xor", maskComposite:"exclude", pointerEvents:"none",
            }} />

            {/* Header */}
            <div style={{ textAlign:"center", marginBottom:36 }}>
              <span className="eyebrow">Bêta privée · Rentrée 2026</span>

              <h2 style={{
                fontSize:"clamp(32px,4vw,52px)", lineHeight:1.08,
                letterSpacing:"-0.022em", margin:"20px 0 16px",
              }}>
                Réservez votre place<br />
                <em style={{
                  fontStyle:"italic",
                  background:"linear-gradient(180deg,#FDE9B4,#F59E0B 70%,#b57a08)",
                  WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent",
                }}>parmi les premiers cabinets.</em>
              </h2>

              <p style={{ fontSize:16, color:"var(--ink-2)", lineHeight:1.65, maxWidth:520, margin:"0 auto" }}>
                Les avocats sur la liste accèdent en premier, au meilleur tarif, et peuvent
                influencer les fonctionnalités du lancement.
              </p>
            </div>

            {/* Progress bar */}
            <div style={{ marginBottom:32 }}>
              <div style={{
                display:"flex", justifyContent:"space-between", alignItems:"center",
                marginBottom:8,
              }}>
                <span style={{ fontFamily:"var(--mono)", fontSize:11, color:"var(--mute)", letterSpacing:"0.06em" }}>
                  PLACES RÉSERVÉES
                </span>
                <span style={{ fontFamily:"var(--mono)", fontSize:12, color:"var(--amber-2)" }}>
                  {COUNT} / {TOTAL}
                </span>
              </div>
              <div style={{
                height:6, borderRadius:99, background:"rgba(255,255,255,0.07)",
                overflow:"hidden",
              }}>
                <div style={{
                  height:"100%", borderRadius:99,
                  width:`${(COUNT/TOTAL)*100}%`,
                  background:"linear-gradient(90deg, #F59E0B, #FBBF24)",
                  boxShadow:"0 0 12px rgba(245,158,11,0.5)",
                }} />
              </div>
              <div style={{
                fontFamily:"var(--mono)", fontSize:10.5, color:"var(--mute)",
                marginTop:6, textAlign:"right",
              }}>{TOTAL - COUNT} places restantes</div>
            </div>

            {/* Perks */}
            <ul style={{
              listStyle:"none", padding:0, margin:"0 0 28px",
              display:"flex", flexDirection:"column", gap:10,
            }}>
              {perks.map(p => (
                <li key={p} style={{
                  display:"flex", alignItems:"center", gap:10,
                  fontSize:14, color:"var(--ink-2)",
                }}>
                  <span style={{
                    width:18, height:18, borderRadius:"50%", flexShrink:0,
                    background:"rgba(245,158,11,0.15)", border:"1px solid rgba(245,158,11,0.35)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:9, color:"var(--amber)",
                  }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Form */}
            {state !== "success" ? (
              <>
                <form onSubmit={submit} noValidate className="waitlist"
                  style={{ opacity: state==="loading" ? 0.7 : 1 }}>
                  <input
                    type="email" name="email" placeholder="votre.email@cabinet.fr"
                    aria-label="Adresse e-mail" autoComplete="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); if(state==="error") setState("idle"); }}
                  />
                  <button className="btn btn-primary" type="submit" disabled={state==="loading"}
                    style={{ padding:"10px 20px", minWidth:170 }}>
                    {state==="loading" ? (
                      <span style={{
                        width:14, height:14,
                        border:"2px solid rgba(26,16,0,0.3)", borderTopColor:"#1a1000",
                        borderRadius:"50%", display:"inline-block",
                        animation:"spin 0.7s linear infinite",
                      }} />
                    ) : "Rejoindre la liste"}
                    {state==="idle" && (
                      <svg viewBox="0 0 16 16" fill="none" style={{ width:14, height:14 }}>
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </form>
                {state==="error" && (
                  <div className="form-error" style={{ display:"block" }}>
                    Merci de saisir une adresse e-mail valide.
                  </div>
                )}
              </>
            ) : (
              <div className="form-success" style={{ display:"block", textAlign:"center" }}>
                ✓ Vous êtes inscrit(e) — nous vous écrirons avant l&apos;ouverture de la bêta.
              </div>
            )}

            {/* Trust line */}
            <div className="form-meta" style={{ justifyContent:"center", marginTop:18 }}>
              <div className="avatars">
                {["T","M","L","C"].map(l => <span key={l}>{l}</span>)}
              </div>
              <span>
                <b style={{ color:"var(--ink)", fontWeight:500 }}>412</b> avocats inscrits ·
                {" "}Barreaux de Paris, Lyon, Bordeaux, Rouen
              </span>
            </div>

            <p style={{
              textAlign:"center", marginTop:14,
              fontFamily:"var(--mono)", fontSize:10.5, letterSpacing:"0.05em",
              color:"var(--mute-2)",
            }}>
              Aucun spam · Données protégées · RGPD conforme
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
