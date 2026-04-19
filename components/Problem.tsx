"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle, Receipt, UserX } from "lucide-react";

const pains = [
  {
    icon: AlertTriangle,
    color: "#EF4444",
    glow: "rgba(239,68,68,0.18)",
    tag: "Risque juridique",
    title: "Le délai oublié",
    body: "Une forclusion. Une radiation. La perte définitive du droit d'agir. Parce que l'alerte était dans un Excel que vous n'avez pas ouvert ce matin-là.",
  },
  {
    icon: Receipt,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.18)",
    tag: "Impact financier",
    title: "La facturation négligée",
    body: "Des honoraires qui traînent, des relances jamais envoyées, une trésorerie sous pression. Le travail est fait — mais pas encaissé.",
  },
  {
    icon: UserX,
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.18)",
    tag: "Coût humain",
    title: "L'isolement professionnel",
    body: "Pas de collègue à qui demander un avis. L'avocat solo porte tout — souvent seul, à 22h, devant un dossier complexe.",
  },
];

export default function Problem() {
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
    <section className="section" style={{ background: "var(--bg-alt)" }} ref={ref}>
      <div className="section-inner">
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="section-label reveal">Le problème</p>
          <h2 className="section-title reveal reveal-delay-1" style={{ maxWidth:680, margin:"0 auto 1rem" }}>
            60% des avocats français travaillent encore avec Word, Excel et des post-it.
          </h2>
          <p className="section-sub reveal reveal-delay-2" style={{ margin:"0 auto" }}>
            Pas un manque de sérieux — un manque d&apos;outil adapté. Résultat : une journée par semaine perdue en tâches non-juridiques.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "1rem",
        }}>
          {pains.map(({ icon: Icon, color, glow, tag, title, body }, i) => (
            <div key={title} className={`glass-card reveal reveal-delay-${i + 1}`}
              style={{ padding:"1.75rem" }}>
              {/* Top row */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"1.25rem" }}>
                <div style={{
                  width:42, height:42, borderRadius:"0.625rem",
                  background: `rgba(${hexToRgb(color)},0.12)`,
                  border: `1px solid rgba(${hexToRgb(color)},0.2)`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  <Icon size={19} color={color} />
                </div>
                <span style={{
                  fontFamily:"'Inter',sans-serif", fontSize:"0.65rem", fontWeight:600,
                  letterSpacing:"0.08em", textTransform:"uppercase",
                  color: color, background:`rgba(${hexToRgb(color)},0.1)`,
                  border:`1px solid rgba(${hexToRgb(color)},0.2)`,
                  padding:"0.2rem 0.65rem", borderRadius:"999px",
                }}>{tag}</span>
              </div>
              <h3 style={{
                fontFamily:"'EB Garamond',Georgia,serif",
                fontSize:"1.3rem", fontWeight:600, marginBottom:"0.75rem", color:"var(--text)",
              }}>{title}</h3>
              <p style={{
                fontFamily:"'Inter',sans-serif", fontSize:"0.875rem",
                fontWeight:300, color:"var(--text-muted)", lineHeight:1.7, margin:0,
              }}>{body}</p>

              {/* Bottom accent line */}
              <div style={{
                marginTop:"1.5rem", height:2, borderRadius:999,
                background:`linear-gradient(to right, ${color}, transparent)`,
                opacity:0.4,
              }} />
            </div>
          ))}
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
