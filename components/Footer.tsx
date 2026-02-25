export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-4 px-[5%] py-8"
      style={{ borderTop: "1px solid rgba(99,102,241,0.12)" }}
    >
      <div
        className="font-mono-custom text-xs"
        style={{ color: "#64748b" }}
      >
        <span style={{ color: "#6366f1" }}>wm</span>.dev &copy;{" "}
        {new Date().getFullYear()}
      </div>
      <div
        className="font-mono-custom text-xs"
        style={{ color: "#64748b" }}
      >
        built_with_intention
        <span style={{ color: "#6366f1" }}>()</span>
      </div>
    </footer>
  );
}
