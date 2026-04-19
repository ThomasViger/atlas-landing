"use client";

import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";

const links = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Pourquoi Atlas", href: "#why" },
  { label: "Genèse", href: "#founder" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(4,11,24,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 1.5rem", height: 66,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" style={{ display:"flex", alignItems:"center", gap:"0.6rem", textDecoration:"none" }}>
          <div style={{
            width: 34, height: 34, borderRadius: "0.5rem",
            background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 16px rgba(59,130,246,0.35)",
          }}>
            <Scale size={16} color="#fff" />
          </div>
          <span style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "1.35rem", fontWeight: 600,
            color: "#F0F4FF", letterSpacing: "-0.01em",
          }}>Atlas</span>
        </a>

        {/* Desktop links */}
        <ul style={{
          display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0,
        }} className="hidden md:flex">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem", fontWeight: 400,
                color: "rgba(240,244,255,0.5)", textDecoration: "none",
                transition: "color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,244,255,0.9)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,244,255,0.5)")}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#waitlist" className="btn-cta hidden md:inline-flex" style={{ fontSize: "0.82rem", padding: "0.55rem 1.2rem" }}>
          Rejoindre la liste d&apos;attente
        </a>

        {/* Mobile burger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: "0.5rem" }}
          aria-label="Menu">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div style={{
          background: "rgba(4,11,24,0.97)", backdropFilter: "blur(20px)",
          borderTop: "1px solid var(--border)",
          padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: "rgba(240,244,255,0.7)", textDecoration: "none", fontSize: "1rem",
            }}>{l.label}</a>
          ))}
          <a href="#waitlist" onClick={() => setOpen(false)} className="btn-cta" style={{ justifyContent: "center" }}>
            Rejoindre la liste d&apos;attente
          </a>
        </div>
      )}
    </header>
  );
}
