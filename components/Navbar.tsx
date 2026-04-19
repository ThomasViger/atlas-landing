"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "Défis",   href: "#pains" },
  { label: "Modules", href: "#modules" },
  { label: "Vision",  href: "#vision" },
  { label: "Bêta",    href: "#tarifs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"fr"|"en">("fr");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const smoothTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background .3s, border-color .3s",
      background: scrolled ? "rgba(4,11,24,0.72)" : "transparent",
      backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
    }}>
      <div className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 32px" }}>

        {/* Logo */}
        <a href="#" style={{ display:"flex", alignItems:"center", gap:10, fontFamily:"var(--serif)", fontSize:22, letterSpacing:"-0.01em" }}>
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
              boxShadow:"0 0 12px rgba(245,158,11,0.55)",
              display:"block",
            }} />
          </span>
          <span>Atlas</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display:"flex", gap:34, fontFamily:"var(--sans)", fontSize:14, color:"var(--ink-2)" }}
          className="hidden md:flex">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{ position:"relative", padding:"6px 0", transition:"color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-2)")}
            >{l.label}</a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          {/* Lang toggle */}
          <div style={{ fontFamily:"var(--mono)", fontSize:12, color:"var(--mute)", letterSpacing:"0.1em", display:"flex", gap:8 }}>
            {(["fr","en"] as const).map(l => (
              <span key={l}
                onClick={() => setLang(l)}
                style={{
                  padding:"4px 6px", borderRadius:4, cursor:"pointer", textTransform:"uppercase",
                  background: lang === l ? "var(--line)" : "transparent",
                  color: lang === l ? "var(--ink)" : "var(--mute)",
                }}>{l}</span>
            ))}
          </div>
          <button className="btn btn-ghost hidden md:inline-flex"
            onClick={() => smoothTo("tarifs")}
            style={{ fontSize:14 }}>
            Rejoindre la liste
          </button>
        </div>
      </div>
    </nav>
  );
}
