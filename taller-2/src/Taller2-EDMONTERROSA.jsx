import { useState } from "react";

const CORAL = "#e94560";
const DARK_NAV = "#0f172a";
const DARK_SECTION = "#111827";
const DARK_COUNTER = "#1e2a3a";
const CARD_BG = "#ffffff";
const LIGHT_BG = "#f3f4f6";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "rgba(26, 26, 46,1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "46px 54px",
        height: "60px",
      }}
    >
      <span
        style={{
          color: CORAL,
          fontWeight: 700,
          fontSize: "32px",
          fontFamily: "Arial, sans-serif",
          letterSpacing: "-0.3px",
        }}
      >
        ReactAcademy
      </span>
      <div style={{ display: "flex", gap: "32px" }}>
        {["Inicio", "Cursos", "Nosotros"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: "#cac5bf",
              textDecoration: "none",
              fontFamily: "Arial, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
            }}
            onMouseEnter={(e) => (e.target.style.color = CORAL)}
            onMouseLeave={(e) => (e.target.style.color = "#cac5bf")}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

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
        paddingTop: "240px",
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
        <button
          style={{
            backgroundColor: CORAL,
            color: "#ffffff",
            border: "none",
            borderRadius: "50px",
            padding: "24px 49px",
            fontSize: "22px",
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e03347")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = CORAL)}
        >
          Ver Cursos
        </button>
      </div>
    </section>
  );
}

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
        borderRadius: "12px",
        padding: "28px 36px",
        flex: "1 1 0",
        minWidth: 350,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div style={{ fontSize: "36px", lineHeight: 1 }}>{icon}</div>
      <h3
        style={{
          fontSize: "28px",
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
            padding: "5px 14px",
            fontSize: "12px",
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
          <p
            style={{
              color: "#777777",
              fontSize: "21.3px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Elige el camino que mejor se adapte a ti
          </p>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const btnStyle = {
    width: "52px",
    height: "52px",
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
        backgroundColor: DARK_SECTION,
        padding: "80px 48px 88px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: 800,
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          marginBottom: "12px",
        }}
      >
        ¿Cuántos estudiantes van a inscribirse?
      </h2>
      <p
        style={{
          color: "#94a3b8",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          marginBottom: "40px",
        }}
      >
        Usa los botones para ajustar el número
      </p>

      <div
        style={{
          display: "inline-block",
          backgroundColor: DARK_COUNTER,
          borderRadius: "14px",
          padding: "32px 56px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
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
              fontSize: "48px",
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

      <p style={{ color: "#94a3b8", fontSize: "15px", fontFamily: "Arial, sans-serif" }}>
        estudiantes inscritos
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        padding: "22px 48px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#94a3b8", fontSize: "14px", fontFamily: "Arial, sans-serif" }}>
        © 2026{" "}
        <span style={{ color: CORAL, fontWeight: 600 }}>ReactAcademy</span>
        {". Taller 02 — React Fundamentos."}
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Arial:wght@400;500;600;700;800&display=swap');
      `}</style>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <Navbar />
        <Hero />
        <CoursesSection />
        <Counter />
        <Footer />
      </div>
    </>
  );
}
