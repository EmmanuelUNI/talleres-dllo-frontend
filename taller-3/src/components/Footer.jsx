const CORAL = "#e94560";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111111",
        padding: "47px 48px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#77736f", fontSize: "18.6px", fontFamily: "Arial, sans-serif" }}>
        © 2026{" "}
        <span style={{ color: CORAL, fontWeight: 400 }}>ReactAcademy</span>
        {". Taller 03 — React Routing, Vistas y Login (UI)."}
      </p>
    </footer>
  );
}
