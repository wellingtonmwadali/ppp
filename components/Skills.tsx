"use client";

import { SKILLS, STATS } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "8rem 5%", background: "#12121e" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            <span style={{ color: "#6366f1" }}>think in.</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div
          className="reveal grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.12)",
          }}
        >
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="transition-colors duration-200 group"
              style={{ background: "#0e0e1a", padding: "2rem" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#13131f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#0e0e1a")
              }
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
                    style={{ background: "#6366f1" }}
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
          className="reveal grid mt-5"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.12)",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.num}
              className="text-center"
              style={{ background: "#0e0e1a", padding: "2rem" }}
            >
              <div
                className="font-mono-custom font-bold leading-none mb-1.5"
                style={{ fontSize: "2rem", color: "#6366f1" }}
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
