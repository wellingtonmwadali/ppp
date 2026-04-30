export default function Footer() {
  return (
    <footer
      className="relative flex justify-between items-center flex-wrap gap-4 px-[5%] py-8"
      style={{ background: "rgba(6,6,14,0.95)" }}
    >
      <div className="gradient-divider absolute top-0 left-0 right-0" />
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
