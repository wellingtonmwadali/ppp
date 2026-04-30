"use client";

import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/data";
import ThreeScene from "@/components/ThreeScene";

const TYPED_TEXT = "AI Full Stack Developer";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(TYPED_TEXT.slice(0, i));
      i++;
      if (i > TYPED_TEXT.length) clearInterval(interval);
    }, 65);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: "8rem 5% 5rem" }}
    >
      {/* Three.js 3D abstract background */}
      <ThreeScene />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Abstract orbs — layered depth */}
      <div
        className="abstract-orb animate-orb-1"
        style={{
          top: "8%",
          right: "12%",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        className="abstract-orb animate-orb-2"
        style={{
          bottom: "10%",
          left: "0%",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 65%)",
        }}
      />
      <div
        className="abstract-orb animate-orb-3"
        style={{
          top: "55%",
          right: "35%",
          width: "260px",
          height: "260px",
          background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* Status pill */}
        <div
          className="inline-flex items-center gap-2 font-mono-custom text-xs mb-10 animate-fade-up"
          style={{
            color: "#4ade80",
            border: "1px solid rgba(74,222,128,0.25)",
            background: "rgba(74,222,128,0.06)",
            padding: "0.35rem 0.9rem",
            borderRadius: "100px",
            animationDelay: "0.1s",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              background: "#4ade80",
              boxShadow: "0 0 8px #4ade80",
              animation: "scanPulse 2s infinite",
            }}
          />
          available for work
        </div>

        {/* Section label */}
        <div
          className="font-mono-custom text-xs tracking-[0.15em] uppercase mb-3 animate-fade-up"
          style={{ color: "#64748b", animationDelay: "0.15s" }}
        >
          <span style={{ color: "#6366f1" }}>//</span> hello, I&apos;m
        </div>

        {/* Name */}
        <h1
          className="font-sans-custom font-bold leading-[0.95] tracking-[-0.04em] mb-4 animate-fade-up"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            color: "#f1f5f9",
            animationDelay: "0.2s",
          }}
        >
          Wellington
          <br />
          <span className="text-gradient-abstract">Mwadali</span>
        </h1>

        {/* Typed role */}
        <div
          className="font-mono-custom mb-8 animate-fade-up"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "#22d3ee",
            animationDelay: "0.3s",
            textShadow: "0 0 20px rgba(34,211,238,0.4)",
          }}
        >
          <span style={{ color: "#64748b" }}>&gt; </span>
          {typed}
          <span className="animate-blink">▌</span>
        </div>

        {/* Current position */}
        <div
          className="font-mono-custom text-sm mb-8 animate-fade-up"
          style={{
            color: "#94a3b8",
            animationDelay: "0.35s",
          }}
        >
          <span style={{ color: "#64748b" }}>//</span> currently shipping at{" "}
          <a
            href="https://kidanga.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "#6366f1", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#818cf8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6366f1")}
          >
            Kidanga
          </a>
        </div>

        {/* Bio — glass card */}
        <p
          className="font-sans-custom font-light leading-relaxed mb-12 animate-fade-up glass-subtle"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            color: "#94a3b8",
            maxWidth: "520px",
            animationDelay: "0.4s",
            padding: "1.2rem 1.5rem",
            borderRadius: "4px",
          }}
        >
          I build end-to-end digital systems — from intelligent AI agents to
          scalable SaaS platforms. I care about the code that nobody sees and
          the experience that everyone feels.
        </p>

        {/* CTAs */}
        <div
          className="flex gap-4 flex-wrap animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#work"
            onClick={scrollToWork}
            className="font-mono-custom text-sm font-medium tracking-wider transition-all duration-200"
            style={{
              color: "#080810",
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              padding: "0.8rem 1.8rem",
              borderRadius: "2px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #818cf8, #a78bfa)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(99,102,241,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #6366f1, #818cf8)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            view_work() →
          </a>
          <a
            href="https://wa.me/254790147060"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-custom text-sm font-medium tracking-wider transition-all duration-200"
            style={{
              color: "#f1f5f9",
              background: "rgba(99,102,241,0.06)",
              backdropFilter: "blur(12px)",
              padding: "0.8rem 1.8rem",
              borderRadius: "2px",
              textDecoration: "none",
              border: "1px solid rgba(99,102,241,0.22)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.color = "#818cf8";
              e.currentTarget.style.background = "rgba(99,102,241,0.12)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.22)";
              e.currentTarget.style.color = "#f1f5f9";
              e.currentTarget.style.background = "rgba(99,102,241,0.06)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            let&apos;s_talk ↗
          </a>
        </div>

        {/* Social row */}
        <div
          className="flex gap-6 mt-14 items-center animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <span
            className="font-mono-custom text-[0.65rem] tracking-[0.1em] uppercase"
            style={{ color: "#64748b" }}
          >
            find me on
          </span>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target={s.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-mono-custom text-xs font-medium tracking-wider transition-colors duration-200"
              style={{ color: "#64748b", textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#6366f1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#64748b")
              }
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
