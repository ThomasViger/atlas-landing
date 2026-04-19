"use client";

import { Scale } from "lucide-react";

const year = new Date().getFullYear();

const cols = [
  {
    title: "Produit",
    links: [
      { label:"Fonctionnalités", href:"#features" },
      { label:"Pourquoi Atlas",  href:"#why" },
      { label:"Liste d'attente", href:"#waitlist" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label:"Mentions légales", href:"#" },
      { label:"Politique RGPD",   href:"#" },
      { label:"Contact",          href:"mailto:contact@thomasviger.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{
      background:"#020811",
      borderTop:"1px solid rgba(255,255,255,0.05)",
      padding:"3rem 1.5rem 2rem",
    }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        {/* Top */}
        <div style={{
          display:"flex", alignItems:"flex-start", justifyContent:"space-between",
          flexWrap:"wrap", gap:"2rem",
          paddingBottom:"2rem",
          borderBottom:"1px solid rgba(255,255,255,0.05)",
          marginBottom:"1.75rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.75rem" }}>
              <div style={{
                width:32, height:32, borderRadius:"0.5rem",
                background:"rgba(255,255,255,0.06)",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <Scale size={15} color="rgba(240,244,255,0.5)" />
              </div>
              <span style={{
                fontFamily:"'EB Garamond',Georgia,serif",
                fontSize:"1.25rem", fontWeight:600, color:"rgba(240,244,255,0.7)",
              }}>Atlas</span>
            </div>
            <p style={{
              fontFamily:"'Inter',sans-serif", fontSize:"0.82rem",
              fontWeight:300, color:"rgba(240,244,255,0.25)",
              maxWidth:240, lineHeight:1.6, margin:0,
            }}>
              Le SaaS de gestion pour cabinets d&apos;avocats.
              <br />Lancement septembre 2026.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display:"flex", gap:"3.5rem", flexWrap:"wrap" }}>
            {cols.map(col => (
              <nav key={col.title}>
                <p style={{
                  fontFamily:"'Inter',sans-serif", fontSize:"0.65rem",
                  fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase",
                  color:"rgba(240,244,255,0.2)", marginBottom:"1rem",
                }}>{col.title}</p>
                <ul style={{
                  listStyle:"none", padding:0, margin:0,
                  display:"flex", flexDirection:"column", gap:"0.6rem",
                }}>
                  {col.links.map(l => (
                    <li key={l.label}>
                      <a href={l.href} style={{
                        fontFamily:"'Inter',sans-serif", fontSize:"0.85rem",
                        fontWeight:300, color:"rgba(240,244,255,0.35)",
                        textDecoration:"none", transition:"color 0.15s",
                      }}
                        onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,244,255,0.75)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,244,255,0.35)")}
                      >{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:"0.75rem",
        }}>
          <p style={{
            fontFamily:"'Inter',sans-serif", fontSize:"0.75rem",
            fontWeight:300, color:"rgba(240,244,255,0.18)", margin:0,
          }}>
            © {year} Atlas · Barreau de Rouen · Tous droits réservés
          </p>
          <p style={{
            fontFamily:"'Inter',sans-serif", fontSize:"0.75rem",
            fontWeight:300, color:"rgba(240,244,255,0.12)", margin:0,
          }}>
            Conçu et développé par Thomas Viger
          </p>
        </div>
      </div>
    </footer>
  );
}
