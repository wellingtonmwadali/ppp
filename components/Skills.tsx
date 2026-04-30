"use client";

import { SKILLS, STATS } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden"
      style={{ padding: "8rem 5%", background: "#0a0a14" }}
    >
      {/* Abstract orbs */}
      <div
        className="abstract-orb animate-orb-3"
        style={{
          top: "10%",
          left: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)",
        }}
      />
      <div
        className="abstract-orb animate-orb-1"
        style={{
          bottom: "5%",
          right: "0%",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Gradient divider top */}
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal mb-20">
          <div
            className="font-mono-custom text-[0.68rem] tracking-[0.2em] uppercase mb-3"
            style={{ color: "#6366f1" }}
          >
            <span style={{ color: "#64748b" }}>03.</span> tech_stack
          </div>
          <h2
            className="font-sans-custom font-bold leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            The tools I
            <br />
            <span className="text-gradient-abstract">think in.</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div
          className="reveal grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.18)",
          }}
        >
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="transition-all duration-300 group"
              style={{
                background: "rgba(10,10,22,0.75)",
                backdropFilter: "blur(16px)",
                padding: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(10,10,22,0.75)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="font-mono-custom text-[0.62rem] tracking-[0.15em] uppercase mb-6"
                style={{ color: "#6366f1" }}
              >
                // {category.toLowerCase()}
              </div>
              {items.map((skill, j) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 py-2"
                  style={{
                    borderBottom:
                      j < items.length - 1
                        ? "1px solid rgba(99,102,241,0.1)"
                        : "none",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "#6366f1", boxShadow: "0 0 6px rgba(99,102,241,0.6)" }}
                  />
                  <span
                    className="font-mono-custom text-sm"
                    style={{ color: "#94a3b8" }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="reveal grid mt-[1px]"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.18)",
            borderTop: "none",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.num}
              className="text-center transition-all duration-300"
              style={{
                background: "rgba(10,10,22,0.75)",
                backdropFilter: "blur(16px)",
                padding: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(10,10,22,0.75)";
              }}
            >
              <div
                className="font-mono-custom font-bold leading-none mb-1.5 text-gradient-abstract"
                style={{ fontSize: "2rem" }}
              >
                {s.num}
              </div>
              <div
                className="font-mono-custom text-[0.65rem] tracking-widest uppercase"
                style={{ color: "#64748b" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 600px) {
            #skills .grid:last-child {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
