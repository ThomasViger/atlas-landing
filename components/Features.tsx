"use client";

import { useEffect, useRef } from "react";
import { LayoutDashboard, FolderOpen, CalendarClock, FileText, Archive } from "lucide-react";

const modules = [
  {
    icon: LayoutDashboard, color: "#3B82F6",
    tag: "Vue du matin",
    title: "Tableau de bord",
    body: "Dossiers prioritaires, délais qui approchent, état de facturation. Un cockpit épuré qui vous donne la main en 30 secondes.",
    col: "md:col-span-2",
  },
  {
    icon: CalendarClock, color: "#F59E0B",
    tag: "Zéro oubli",
    title: "Agenda & Alertes",
    body: "Délais procéduraux, audiences, rendez-vous. Chaque échéance tracée, visible, sécurisée.",
    col: "md:col-span-1",
  },
  {
    icon: FolderOpen, color: "#34D399",
    tag: "Accès immédiat",
    title: "Gestion dossiers",
    body: "Chaque dossier a son espace, ses pièces, sa chronologie. Fini les recherches de 20 minutes dans Windows Explorer.",
    col: "md:col-span-1",
  },
  {
    icon: FileText, color: "#A78BFA",
    tag: "Conformité",
    title: "Facturation PDF légal",
    body: "Notes d'honoraires conformes, relances automatiques. Le chiffre d'affaires que vous avez gagné — effectivement encaissé.",
    col: "md:col-span-1",
  },
  {
    icon: Archive, color: "#38BDF8",
    tag: "OCR intelligent",
    title: "Gestion documentaire",
    body: "Classement automatique, OCR, recherche plein texte. Vos documents sont là où vous les attendez — et là où la loi exige qu'ils soient.",
    col: "md:col-span-2",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="section" ref={ref}>
      {/* Subtle radial glow */}
      <div aria-hidden style={{
        position:"absolute", top:"10%", left:"50%", transform:"translateX(-50%)",
        width:600, height:600, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-inner">
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <p className="section-label reveal">La solution</p>
          <h2 className="section-title reveal reveal-delay-1" style={{ maxWidth:620, margin:"0 auto 1rem" }}>
            Tout ce dont un cabinet a besoin. Rien de superflu.
          </h2>
          <p className="section-sub reveal reveal-delay-2" style={{ margin:"0 auto" }}>
            5 modules intégrés, conçus pour s&apos;apprendre en moins d&apos;une heure. Time-to-value dès le premier jour.
          </p>
        </div>

        {/* Bento */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"0.875rem",
        }}>
          {modules.map(({ icon: Icon, color, tag, title, body, col }, i) => {
            const rgb = hexToRgb(color);
            return (
              <div key={title}
                className={`glass-card reveal reveal-delay-${(i % 4) + 1} ${col}`}
                style={{ padding:"1.75rem", position:"relative", overflow:"hidden" }}
              >
                {/* Glow orb */}
                <div aria-hidden style={{
                  position:"absolute", top:-40, right:-40,
                  width:140, height:140, borderRadius:"50%",
                  background:`radial-gradient(circle, rgba(${rgb},0.12) 0%, transparent 70%)`,
                  pointerEvents:"none",
                }} />

                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"1.25rem" }}>
                  <div style={{
                    width:40, height:40, borderRadius:"0.6rem",
                    background:`rgba(${rgb},0.12)`,
                    border:`1px solid rgba(${rgb},0.2)`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <Icon size={18} color={color} />
                  </div>
                  <span style={{
                    fontFamily:"'Inter',sans-serif", fontSize:"0.63rem", fontWeight:600,
                    letterSpacing:"0.08em", textTransform:"uppercase", color,
                    background:`rgba(${rgb},0.1)`, border:`1px solid rgba(${rgb},0.2)`,
                    padding:"0.18rem 0.6rem", borderRadius:"999px",
                  }}>{tag}</span>
                </div>

                <h3 style={{
                  fontFamily:"'EB Garamond',Georgia,serif",
                  fontSize:"1.25rem", fontWeight:600,
                  color:"var(--text)", marginBottom:"0.65rem",
                }}>{title}</h3>

                <p style={{
                  fontFamily:"'Inter',sans-serif", fontSize:"0.855rem",
                  fontWeight:300, color:"var(--text-muted)", lineHeight:1.7, margin:0,
                }}>{body}</p>

                <div style={{
                  position:"absolute", bottom:0, left:0, right:0,
                  height:2, background:`linear-gradient(to right, rgba(${rgb},0.5), transparent)`,
                }} />
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
