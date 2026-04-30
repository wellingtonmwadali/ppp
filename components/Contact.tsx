"use client";

import { useState } from "react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden mesh-gradient"
      style={{ padding: "8rem 5%" }}
    >
      {/* Gradient divider top */}
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      {/* Abstract orbs */}
      <div
        className="abstract-orb animate-orb-2"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 60%)",
        }}
      />
      <div
        className="abstract-orb animate-orb-1"
        style={{
          bottom: "0%",
          right: "-5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 65%)",
        }}
      />

      <div
        className="relative z-10 text-center mx-auto"
        style={{ maxWidth: "680px" }}
      >
        {/* Label */}
        <div
          className="reveal font-mono-custom text-[0.68rem] tracking-[0.2em] uppercase mb-3"
          style={{ color: "#6366f1" }}
        >
          <span style={{ color: "#64748b" }}>04.</span> contact()
        </div>

        {/* Heading */}
        <h2
          className="reveal font-sans-custom font-bold leading-[1.05] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
        >
          Let&apos;s build
          <br />
          <span className="text-gradient-abstract">something real.</span>
        </h2>

        {/* Sub */}
        <p
          className="reveal font-sans-custom font-light leading-relaxed mb-14"
          style={{ fontSize: "0.95rem", color: "#94a3b8" }}
        >
          Got a project that needs serious engineering? An idea that deserves
          more than a template? I&apos;m open to new projects, collaborations,
          and interesting problems.
        </p>

        {/* Contact cards */}
        <div
          className="reveal text-left mb-8"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(99,102,241,0.18)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
          id="contact-cards"
        >
          {/* Email card */}
          <div
            style={{
              background: "rgba(10,10,22,0.8)",
              backdropFilter: "blur(20px)",
              padding: "1.8rem",
            }}
          >
            <div
              className="font-mono-custom text-[0.6rem] tracking-[0.15em] uppercase mb-2"
              style={{ color: "#64748b" }}
            >
              // email
            </div>
            <div
              className="font-mono-custom text-sm mb-4 break-all"
              style={{ color: "#f1f5f9" }}
            >
              {CONTACT.email}
            </div>
            <button
              onClick={copyEmail}
              className="font-mono-custom text-[0.68rem] tracking-wider transition-all duration-200"
              style={{
                background: "transparent",
                border: "1px solid rgba(99,102,241,0.25)",
                color: copied ? "#4ade80" : "#6366f1",
                padding: "0.4rem 0.8rem",
                borderRadius: "2px",
                cursor: "pointer",
              }}
            >
              {copied ? "✓ copied!" : "copy_email"}
            </button>
          </div>

          {/* WhatsApp card */}
          <div
            style={{
              background: "rgba(10,10,22,0.8)",
              backdropFilter: "blur(20px)",
              padding: "1.8rem",
            }}
          >
            <div
              className="font-mono-custom text-[0.6rem] tracking-[0.15em] uppercase mb-2"
              style={{ color: "#64748b" }}
            >
              // whatsapp
            </div>
            <div
              className="font-mono-custom text-sm mb-4"
              style={{ color: "#f1f5f9" }}
            >
              {CONTACT.phone}
            </div>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-custom text-[0.68rem] tracking-wider inline-block transition-opacity duration-200"
              style={{
                background: "rgba(74,222,128,0.1)",
                border: "1px solid rgba(74,222,128,0.25)",
                color: "#4ade80",
                padding: "0.4rem 0.8rem",
                borderRadius: "2px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              open_whatsapp ↗
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="reveal flex gap-6 justify-center flex-wrap">
          {SOCIAL_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target={l.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-mono-custom text-xs tracking-wider transition-all duration-200"
              style={{ color: "#64748b", textDecoration: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#6366f1";
                e.currentTarget.style.textShadow = "0 0 12px rgba(99,102,241,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          #contact-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
