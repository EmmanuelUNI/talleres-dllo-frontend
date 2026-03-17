import { Link } from "react-router";

const CORAL = "#e94560";

export default function NotFound() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #161f3b 50%, #0a3060 100%)",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p
        style={{
          fontSize: "120px",
          fontWeight: 700,
          color: CORAL,
          opacity: 0.3,
          lineHeight: 1,
          marginBottom: "16px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "42px",
          fontWeight: 600,
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          marginBottom: "16px",
        }}
      >
        Página no encontrada
      </h1>
      <p
        style={{
          color: "#aaaaaa",
          fontSize: "20px",
          fontFamily: "Arial, sans-serif",
          marginBottom: "40px",
        }}
      >
        La ruta que buscas no existe.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          backgroundColor: CORAL,
          color: "#ffffff",
          borderRadius: "50px",
          padding: "20px 48px",
          fontSize: "20px",
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e03347")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = CORAL)}
      >
        Volver al inicio
      </Link>
    </section>
  );
}
