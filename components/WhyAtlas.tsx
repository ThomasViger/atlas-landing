"use client";

import { useEffect, useRef } from "react";
import { Zap, Brain, Building2 } from "lucide-react";

const cards = [
  {
    icon: Zap, color: "#F59E0B",
    number: "01",
    title: "Anti-usine à gaz",
    body: "200 boutons dont vous utilisez 15% : c'est l'outil que vous subissez. Atlas est conçu pour être évident — chaque écran a un but, chaque clic est utile ou supprimé.",
    badge: "Aucune formation nécessaire",
  },
  {
    icon: Brain, color: "#A78BFA",
    number: "02",
    title: "Gestion d'abord, IA ensuite",
    body: "Les fondations d'abord : solides, fiables, conformes. L'IA amplifie ce qui fonctionne — OCR, suggestions contextuelles, chronologie automatique.",
    badge: "Crédibilité par la fiabilité",
  },
  {
    icon: Building2, color: "#34D399",
    number: "03",
    title: "Du solo à l'équipe",
    body: "Commencez seul. Associez-vous demain. Atlas grandit avec votre cabinet — sans migration, sans disruption, sans perte de données.",
    badge: "Time-to-value jour 1",
  },
];

export default function WhyAtlas() {
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
    <section id="why" className="section" style={{ background:"var(--bg-alt)" }} ref={ref}>
      <div className="section-inner">
        <div style={{ marginBottom:"3.5rem" }}>
          <p className="section-label reveal">Pourquoi Atlas</p>
          <h2 className="section-title reveal reveal-delay-1" style={{ maxWidth:600 }}>
            Pas un logiciel de plus.
            <br />
            <em style={{ fontStyle:"italic", color:"rgba(245,158,11,0.85)" }}>Un outil qui s&apos;efface.</em>
          </h2>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(270px,1fr))",
          gap:"1rem",
        }}>
          {cards.map(({ icon: Icon, color, number, title, body, badge }, i) => {
            const rgb = hexToRgb(color);
            return (
              <div key={title} className={`glass-card reveal reveal-delay-${i+1}`}
                style={{ padding:"2rem", position:"relative", overflow:"hidden" }}>
                {/* Large number watermark */}
                <div aria-hidden style={{
                  position:"absolute", top:"-0.5rem", right:"1rem",
                  fontFamily:"'EB Garamond',Georgia,serif",
                  fontSize:"6rem", fontWeight:700, lineHeight:1,
                  color:"rgba(255,255,255,0.03)", userSelect:"none",
                  pointerEvents:"none",
                }}>{number}</div>

                <div style={{
                  width:46, height:46, borderRadius:"0.75rem",
                  background:`rgba(${rgb},0.1)`,
                  border:`1px solid rgba(${rgb},0.2)`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  marginBottom:"1.25rem",
                }}>
                  <Icon size={20} color={color} />
                </div>

                <h3 style={{
                  fontFamily:"'EB Garamond',Georgia,serif",
                  fontSize:"1.35rem", fontWeight:600,
                  color:"var(--text)", marginBottom:"0.75rem",
                }}>{title}</h3>

                <p style={{
                  fontFamily:"'Inter',sans-serif", fontSize:"0.875rem",
                  fontWeight:300, color:"var(--text-muted)",
                  lineHeight:1.7, marginBottom:"1.5rem",
                }}>{body}</p>

                <span style={{
                  display:"inline-flex", alignItems:"center",
                  padding:"0.28rem 0.8rem", borderRadius:"999px",
                  background:`rgba(${rgb},0.1)`, border:`1px solid rgba(${rgb},0.2)`,
                  fontFamily:"'Inter',sans-serif", fontSize:"0.7rem",
                  fontWeight:600, color, letterSpacing:"0.04em",
                }}>{badge}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}
