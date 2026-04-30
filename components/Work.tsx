"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

const STATUS_COLORS: Record<string, string> = {
  live: "#4ade80",
  "open-source": "#22d3ee",
  published: "#818cf8",
};

function ProjectRow({
  project,
  index,
  expanded,
  onToggle,
}: {
  project: Project;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className="reveal transition-all duration-300"
      style={{
        background: expanded ? "rgba(14,14,30,0.85)" : "transparent",
        borderLeft: expanded
          ? `2px solid ${project.color}`
          : "2px solid transparent",
        backdropFilter: expanded ? "blur(8px)" : "none",
      }}
    >
      {/* Row header */}
      <div
        onClick={onToggle}
        role="button"
        aria-expanded={expanded}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
        className="grid items-center transition-colors duration-200 cursor-pointer"
        style={{
          gridTemplateColumns: "40px 1fr auto auto",
          gap: "1.5rem",
          padding: "1.8rem 2rem",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(99,102,241,0.05)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        {/* Index */}
        <div
          className="font-mono-custom text-[0.65rem] tracking-widest"
          style={{ color: "#64748b" }}
        >
          0{index + 1}
        </div>

        {/* Title & type */}
        <div>
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <h3
              className="font-sans-custom font-semibold tracking-tight"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
            >
              {project.title}
            </h3>
            <span
              className="font-mono-custom text-[0.62rem]"
              style={{
                color: STATUS_COLORS[project.status] || "#6366f1",
                border: `1px solid ${STATUS_COLORS[project.status]}33`,
                padding: "0.15rem 0.5rem",
                borderRadius: "100px",
              }}
            >
              {project.status}
            </span>
          </div>
          <div
            className="font-mono-custom text-[0.68rem] tracking-wider"
            style={{ color: "#64748b" }}
          >
            {project.type}
          </div>
        </div>

        {/* Tags — hidden on mobile */}
        <div className="hidden lg:flex gap-1.5 flex-wrap justify-end">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono-custom text-[0.6rem]"
              style={{
                color: "#64748b",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(99,102,241,0.15)",
                padding: "0.2rem 0.5rem",
                borderRadius: "2px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand icon */}
        <div
          className="font-mono-custom text-lg transition-transform duration-300 w-6 text-center flex-shrink-0"
          style={{
            color: "#6366f1",
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </div>
      </div>

      {/* Expanded body */}
      <div
        style={{
          maxHeight: expanded ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="grid gap-8 px-8 pb-10"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left: description + links */}
          <div>
            <p
              className="font-sans-custom font-light leading-relaxed mb-6"
              style={{ fontSize: "0.9rem", color: "#94a3b8" }}
            >
              {project.description}
            </p>
            <div className="flex gap-3 flex-wrap">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-custom text-xs font-medium transition-opacity duration-200"
                  style={{
                    color: "#080810",
                    background: project.color,
                    padding: "0.5rem 1.1rem",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "0.85")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = "1")
                  }
                >
                  {project.github ? "view_repo ↗" : "live_demo ↗"}
                </a>
              )}
              {project.github && project.url !== project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-custom text-xs font-medium"
                  style={{
                    color: "#f1f5f9",
                    background: "transparent",
                    padding: "0.5rem 1.1rem",
                    borderRadius: "2px",
                    textDecoration: "none",
                    border: "1px solid rgba(99,102,241,0.15)",
                  }}
                >
                  github ↗
                </a>
              )}
            </div>
          </div>

          {/* Right: highlights + tags */}
          <div>
            <div
              className="font-mono-custom text-[0.62rem] tracking-[0.15em] uppercase mb-4"
              style={{ color: "#64748b" }}
            >
              // key_features
            </div>
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex gap-3 items-start py-2"
                style={{
                  borderBottom:
                    i < project.highlights.length - 1
                      ? "1px solid rgba(99,102,241,0.1)"
                      : "none",
                }}
              >
                <span
                  className="font-mono-custom text-xs mt-0.5 flex-shrink-0"
                  style={{ color: project.color }}
                >
                  ▸
                </span>
                <span
                  className="font-sans-custom font-light text-sm"
                  style={{ color: "#94a3b8" }}
                >
                  {h}
                </span>
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono-custom text-[0.6rem]"
                  style={{
                    color: "#6366f1",
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.15)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "2px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:640px){article .grid{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </article>
  );
}

export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="relative overflow-hidden mesh-gradient"
      style={{ padding: "8rem 5%" }}
    >
      {/* Abstract decorative orbs */}
      <div
        className="abstract-orb animate-orb-2"
        style={{
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)",
        }}
      />
      <div
        className="abstract-orb animate-orb-1"
        style={{
          bottom: "5%",
          left: "-8%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Top divider */}
      <div className="gradient-divider mb-0 absolute top-0 left-0 right-0" />

      <div className="relative z-10" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal mb-20">
          <div
            className="font-mono-custom text-[0.68rem] tracking-[0.2em] uppercase mb-3"
            style={{ color: "#6366f1" }}
          >
            <span style={{ color: "#64748b" }}>02.</span> selected_work
          </div>
          <h2
            className="font-sans-custom font-bold leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Things I&apos;ve
            <br />
            <span className="text-gradient-abstract">actually built.</span>
          </h2>
        </div>

        {/* Project list */}
        <div
          className="glass"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "rgba(8,8,22,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.18)",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectRow
              key={p.id}
              project={p}
              index={i}
              expanded={expanded === i}
              onToggle={() => setExpanded(expanded === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
