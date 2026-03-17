import { useState } from "react";
import { Link } from "react-router";

const CORAL = "#e94560";
const CARD_BG = "#ffffff";
const LIGHT_BG = "#f3f4f6";

/* ── Hero ─────────────────────────────────────────
   Igual al Taller 2, solo el botón usa Link en vez de <button>
──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #161f3b 50%, #0a3060 100%)",
        minHeight: "540px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "129px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "1800px", padding: "0 24px" }}>
        <h1
          style={{
            fontSize: "69px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "40px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Aprende <span style={{ color: CORAL }}>React</span> desde cero
        </h1>
        <p
          style={{
            color: "#aaaaaa",
            fontSize: "26.5px",
            lineHeight: 1.65,
            marginBottom: "48px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 400,
          }}
        >
          Domina la librería más popular del frontend con proyectos
          <br />
          prácticos y reales.
        </p>
        {/* Link en vez de button para navegar a /cursos */}
        <Link
          to="/cursos"
          style={{
            display: "inline-block",
            backgroundColor: CORAL,
            color: "#ffffff",
            border: "none",
            borderRadius: "50px",
            padding: "24px 49px",
            fontSize: "22px",
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e03347")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = CORAL)}
        >
          Ver Cursos
        </Link>
      </div>
    </section>
  );
}

/* ── CoursesSection ───────────────────────────────
   Exacta al Taller 2
──────────────────────────────────────────────────── */
const courses = [
  {
    icon: "⚛️",
    title: "React Básico",
    desc: "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
    badge: "Principiante",
  },
  {
    icon: "🔁",
    title: "React Hooks",
    desc: "Profundiza en useState, useEffect y crea tus propios custom hooks.",
    badge: "Intermedio",
  },
  {
    icon: "🗂️",
    title: "Estado Global",
    desc: "Gestiona el estado con Context API y aprende cuándo usarlo.",
    badge: "Intermedio",
  },
  {
    icon: "🚀",
    title: "React Avanzado",
    desc: "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
    badge: "Avanzado",
  },
];

function CourseCard({ icon, title, desc, badge }) {
  return (
    <div
      style={{
        backgroundColor: CARD_BG,
        borderRadius: "18px",
        padding: "44px 24px",
        flex: "1 1 0",
        minWidth: 0,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ fontSize: "53px", lineHeight: 1, marginBottom: "14px", marginTop: "6px" }}>{icon}</div>
      <h3
        style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#1a202c",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#777777",
          fontSize: "20px",
          lineHeight: 1.6,
          fontFamily: "Arial, sans-serif",
          flex: 1,
        }}
      >
        {desc}
      </p>
      <div>
        <span
          style={{
            backgroundColor: CORAL,
            color: "#ffffff",
            borderRadius: "50px",
            padding: "10px 18px",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "Arial, sans-serif",
            display: "inline-block",
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}

function CoursesSection() {
  return (
    <section style={{ backgroundColor: LIGHT_BG, padding: "72px 48px 80px" }}>
      <div style={{ maxWidth: "1610px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              marginTop: "31px",
              fontSize: "42px",
              fontWeight: 600,
              color: "#1a202c",
              fontFamily: "Arial, sans-serif",
              marginBottom: "34px",
            }}
          >
            Nuestros Cursos
          </h2>
          <p style={{ color: "#777777", fontSize: "21.3px", fontFamily: "Arial, sans-serif" }}>
            Elige el camino que mejor se adapte a ti
          </p>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Counter ──────────────────────────────────────
   Exacto al Taller 2
──────────────────────────────────────────────────── */
function Counter() {
  const [count, setCount] = useState(0);

  const btnStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: CORAL,
    color: "#ffffff",
    border: "none",
    fontSize: "26px",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    flexShrink: 0,
  };

  return (
    <section
      style={{
        backgroundColor: "#1a1a2e",
        padding: "104px 48px 150px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "43px",
          fontWeight: 600,
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          marginBottom: "28px",
        }}
      >
        Cuántos estudiantes van a inscribirse?
      </h2>
      <p style={{ color: "#aaaaaa", fontSize: "21px", fontFamily: "Arial, sans-serif", marginBottom: "48px" }}>
        Usa los botones para ajustar el número
      </p>

      <div
        style={{
          display: "inline-block",
          backgroundColor: "#16213e",
          borderRadius: "18px",
          padding: "60px 56px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "54px", marginTop: "12px" }}>
          <button
            style={btnStyle}
            onClick={() => setCount((c) => Math.max(0, c - 1))}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e03347")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = CORAL)}
          >
            −
          </button>
          <span
            style={{
              color: CORAL,
              fontSize: "72px",
              fontWeight: 700,
              fontFamily: "Arial, sans-serif",
              minWidth: "60px",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            {count}
          </span>
          <button
            style={btnStyle}
            onClick={() => setCount((c) => c + 1)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e03347")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = CORAL)}
          >
            +
          </button>
        </div>
      </div>

      <p style={{ color: "#aaaaaa", fontSize: "19px", fontFamily: "Arial, sans-serif" }}>
        estudiantes inscritos
      </p>
    </section>
  );
}

/* ── Vista / (Home) ───────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <CoursesSection />
      <Counter />
    </>
  );
}
