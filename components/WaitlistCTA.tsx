"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Accès anticipé au tarif Early Bird",
  "Participation à la bêta fermée (été 2026)",
  "Votre avis influence le produit final",
];

export default function WaitlistCTA() {
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
    <section id="waitlist" style={{
      padding:"6rem 1.5rem",
      background:"var(--bg-alt)",
      position:"relative", overflow:"hidden",
    }}>
      {/* Grid */}
      <div className="grid-bg" aria-hidden style={{ position:"absolute", inset:0 }} />
      {/* Glow center */}
      <div aria-hidden style={{
        position:"absolute", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)",
        width:700, height:400, borderRadius:"50%",
        background:"radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div style={{
        position:"relative", maxWidth:660,
        margin:"0 auto", textAlign:"center",
        animation:"fadeUp 0.7s ease both",
      }}>
        <p className="section-label" style={{ marginBottom:"1rem" }}>Lancement septembre 2026</p>

        <h2 style={{
          fontFamily:"'EB Garamond',Georgia,serif",
          fontSize:"clamp(2.2rem,5vw,3.5rem)",
          fontWeight:600, lineHeight:1.12,
          letterSpacing:"-0.02em",
          marginBottom:"1.25rem",
        }}>
          <span className="gradient-text">Réservez votre place</span>
          <br />
          <em className="gradient-text-amber" style={{ fontStyle:"italic" }}>parmi les premiers cabinets.</em>
        </h2>

        <p style={{
          fontFamily:"'Inter',sans-serif", fontSize:"1rem",
          fontWeight:300, color:"var(--text-muted)",
          lineHeight:1.75, marginBottom:"2.25rem",
        }}>
          Les avocats sur la liste accèdent en premier, au meilleur tarif, et peuvent influencer les fonctionnalités du lancement.
        </p>

        {/* Perks */}
        <ul style={{
          listStyle:"none", padding:0, margin:"0 auto 2.5rem",
          maxWidth:360, textAlign:"left",
          display:"flex", flexDirection:"column", gap:"0.625rem",
        }}>
          {perks.map(p => (
            <li key={p} style={{
              display:"flex", alignItems:"center", gap:"0.75rem",
              fontFamily:"'Inter',sans-serif", fontSize:"0.875rem",
              color:"rgba(240,244,255,0.75)",
            }}>
              <CheckCircle2 size={15} style={{ flexShrink:0, color:"var(--cta)" }} />
              {p}
            </li>
          ))}
        </ul>

        {/* Form */}
        {!done ? (
          <form onSubmit={handleSubmit} style={{
            display:"flex", gap:"0.6rem",
            justifyContent:"center", flexWrap:"wrap",
            marginBottom:"1rem",
          }}>
            <input
              type="email" value={email} required
              onChange={e => setEmail(e.target.value)}
              placeholder="votre@cabinet.fr"
              aria-label="Adresse email"
              className="input-dark"
              style={{ width:270, maxWidth:"100%" }}
            />
            <button type="submit" className="btn-cta" disabled={loading}
              style={{ opacity:loading?0.7:1, cursor:loading?"not-allowed":"pointer" }}>
              {loading ? (
                <span style={{
                  width:16, height:16,
                  border:"2px solid rgba(0,0,0,0.25)", borderTopColor:"#0A0A0A",
                  borderRadius:"50%", display:"inline-block",
                  animation:"spinCW 0.7s linear infinite",
                }} />
              ) : (
                <>Je rejoins la liste <ArrowRight size={15}/></>
              )}
            </button>
          </form>
        ) : (
          <div style={{
            display:"inline-block",
            padding:"0.9rem 2rem",
            background:"rgba(245,158,11,0.1)",
            border:"1px solid rgba(245,158,11,0.3)",
            borderRadius:"999px", color:"#FCD34D",
            fontFamily:"'Inter',sans-serif",
            fontWeight:600, fontSize:"0.9rem",
            animation:"fadeIn 0.4s ease",
            marginBottom:"1rem",
          }}>
            Parfait — vous êtes inscrit. À très bientôt.
          </div>
        )}

        <p style={{
          fontFamily:"'Inter',sans-serif", fontSize:"0.7rem",
          color:"var(--text-dim)", letterSpacing:"0.03em",
        }}>
          Aucun spam &nbsp;·&nbsp; Données protégées &nbsp;·&nbsp; RGPD conforme
        </p>
      </div>
    </section>
  );
}
