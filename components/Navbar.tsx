"use client";

import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background var(--transition-base), box-shadow var(--transition-base)",
        background: scrolled ? "rgba(248,250,252,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 var(--color-border)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 var(--space-xl)",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-sm)",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              background: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Scale size={18} color="#ffffff" />
          </div>
          <span
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "1.375rem",
              fontWeight: 600,
              color: "var(--color-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            Atlas
          </span>
        </a>

        {/* Nav links — desktop */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-xl)",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {[
            { label: "Fonctionnalités", href: "#features" },
            { label: "Pourquoi Atlas", href: "#why" },
            { label: "À propos", href: "#founder" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color var(--transition-fast)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-muted)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#waitlist"
          className="hidden md:inline-flex"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-sm)",
            padding: "0.55rem 1.25rem",
            background: "var(--color-cta)",
            color: "#ffffff",
            borderRadius: "var(--radius-sm)",
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "0.01em",
            transition: "background var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-cta-hover)";
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(180,83,9,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--color-cta)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Rejoindre la liste d&apos;attente
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "var(--space-sm)",
            color: "var(--color-text)",
          }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--color-bg)",
            borderTop: "1px solid var(--color-border)",
            padding: "var(--space-lg) var(--space-xl)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-lg)",
          }}
        >
          {[
            { label: "Fonctionnalités", href: "#features" },
            { label: "Pourquoi Atlas", href: "#why" },
            { label: "À propos", href: "#founder" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--color-text)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 400,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              padding: "0.75rem 1.5rem",
              background: "var(--color-cta)",
              color: "#ffffff",
              borderRadius: "var(--radius-sm)",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Rejoindre la liste d&apos;attente
          </a>
        </div>
      )}
    </header>
  );
}
