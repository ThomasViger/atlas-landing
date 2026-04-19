"use client";

import { useEffect, useRef } from "react";
import { Scale, MapPin, Calendar } from "lucide-react";

export default function Founder() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="founder" className="section" ref={ref}>
      <div aria-hidden style={{
        position:"absolute", top:"20%", right:0,
        width:400, height:400, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-inner">
        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"3.5rem",
          alignItems:"center",
        }}>
          {/* Left: card */}
          <div className="reveal" style={{
            background:"linear-gradient(145deg, rgba(30,58,138,0.45) 0%, rgba(30,64,175,0.3) 100%)",
            border:"1px solid rgba(59,130,246,0.2)",
            borderRadius:"var(--radius-xl)",
            padding:"2.25rem",
            position:"relative", overflow:"hidden",
            backdropFilter:"blur(16px)",
          }}>
            {/* Decorative circles */}
            {[180, 240].map(s => (
              <div key={s} aria-hidden style={{
                position:"absolute", bottom:`-${s/3}px`, right:`-${s/3}px`,
                width:s, height:s, borderRadius:"50%",
                border:"1px solid rgba(255,255,255,0.05)",
                pointerEvents:"none",
              }} />
            ))}

            {/* Avatar */}
            <div style={{
              width:68, height:68, borderRadius:"50%",
              background:"rgba(255,255,255,0.08)",
              border:"1.5px solid rgba(255,255,255,0.15)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontFamily:"'EB Garamond',Georgia,serif",
              fontSize:"1.6rem", fontWeight:600, color:"#F0F4FF",
              marginBottom:"1.25rem",
              boxShadow:"0 0 24px rgba(59,130,246,0.25)",
            }}>TV</div>

            <h3 style={{
              fontFamily:"'EB Garamond',Georgia,serif",
              fontSize:"1.6rem", fontWeight:600,
              color:"#F0F4FF", marginBottom:"0.875rem",
            }}>Thomas Viger</h3>

            {[
              { icon: Scale,    text: "Avocat au Barreau de Rouen" },
              { icon: MapPin,   text: "Rouen, Normandie" },
              { icon: Calendar, text: "Fondateur Atlas · lancement sept. 2026" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{
                display:"flex", alignItems:"center", gap:"0.6rem",
                marginBottom:"0.5rem",
                fontFamily:"'Inter',sans-serif", fontSize:"0.82rem",
                color:"rgba(240,244,255,0.55)",
              }}>
                <Icon size={13} />
                {text}
              </div>
            ))}

            <div style={{
              display:"inline-flex",
              marginTop:"1.25rem",
              padding:"0.3rem 0.9rem",
              background:"rgba(245,158,11,0.12)",
              border:"1px solid rgba(245,158,11,0.25)",
              borderRadius:"999px",
              fontFamily:"'Inter',sans-serif",
              fontSize:"0.7rem", fontWeight:700,
              color:"#FCD34D", letterSpacing:"0.06em", textTransform:"uppercase",
            }}>Fondateur &amp; Avocat</div>
          </div>

          {/* Right: quote */}
          <div className="reveal reveal-delay-2">
            <p className="section-label">La genèse</p>

            {/* Big decorative quote mark */}
            <div aria-hidden style={{
              fontFamily:"'EB Garamond',Georgia,serif",
              fontSize:"7rem", lineHeight:0.8,
              color:"rgba(245,158,11,0.12)",
              marginBottom:"0.5rem",
              userSelect:"none",
            }}>"</div>

            <blockquote style={{
              fontFamily:"'EB Garamond',Georgia,serif",
              fontSize:"clamp(1.25rem,2.5vw,1.65rem)",
              fontWeight:500, fontStyle:"italic",
              color:"var(--text)", lineHeight:1.55,
              borderLeft:"3px solid var(--cta)",
              paddingLeft:"1.5rem",
              margin:"0 0 1.75rem",
            }}>
              J&apos;ai passé trop de soirées à chercher un document, recalculer une échéance, relancer un client. Ce n&apos;est pas pour ça que je suis devenu avocat.
            </blockquote>

            <p style={{
              fontFamily:"'Inter',sans-serif", fontSize:"0.9rem",
              fontWeight:300, color:"var(--text-muted)", lineHeight:1.75,
              marginBottom:"1.5rem",
            }}>
              Atlas naît d&apos;une frustration réelle, vécue de l&apos;intérieur. Pas d&apos;une étude de marché. Ce qui garantit que chaque décision produit vient d&apos;un vrai besoin d&apos;avocat — pas d&apos;une hypothèse.
            </p>

            <a href="#waitlist" className="btn-ghost" style={{ fontSize:"0.85rem" }}>
              Suivre le lancement →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
