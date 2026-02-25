"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { id: "home", label: "home" },
  { id: "work", label: "work" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[800] flex items-center justify-between px-[5%] transition-all duration-500"
        style={{
          height: "60px",
          background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(99,102,241,0.15)"
            : "1px solid transparent",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="font-mono-custom text-base font-bold tracking-tight bg-none border-none cursor-none"
          aria-label="Go to top"
        >
          <span style={{ color: "#6366f1" }}>wm</span>
          <span style={{ color: "#64748b" }}>.dev</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-mono-custom text-xs font-medium tracking-widest uppercase relative transition-colors duration-200 cursor-none border-none bg-transparent"
              style={{ color: active === l.id ? "#6366f1" : "#64748b" }}
              aria-current={active === l.id ? "page" : undefined}
            >
              <span style={{ color: "#6366f1" }}>./</span>
              {l.label}
              {active === l.id && (
                <span
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: "1px", background: "#6366f1" }}
                />
              )}
            </button>
          ))}
          <a
            href="mailto:wellingtonmwadali@gmail.com"
            className="font-mono-custom text-xs font-medium tracking-wider transition-colors duration-200"
            style={{
              color: "#080810",
              background: "#6366f1",
              padding: "0.45rem 1rem",
              borderRadius: "2px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#818cf8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#6366f1")
            }
          >
            hire_me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden border-none bg-transparent text-white text-xl p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{ cursor: "pointer" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[750] flex flex-col justify-center items-center gap-8"
          style={{ background: "#080810" }}
        >
          {links.map((l, i) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-mono-custom font-bold border-none bg-transparent cursor-pointer"
              style={{
                fontSize: "2rem",
                color: active === l.id ? "#6366f1" : "#f1f5f9",
                opacity: 0,
                animation: `fadeUp 0.4s ${i * 0.08}s both`,
                cursor: "pointer",
              }}
            >
              <span style={{ color: "#6366f1" }}>./</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
