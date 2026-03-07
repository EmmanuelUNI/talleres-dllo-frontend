import { useState } from "react";

const CORAL = "#F4485A";
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
        backgroundColor: "rgba(15, 23, 42, 0.97)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: "60px",
      }}
    >
      <span
        style={{
          color: CORAL,
          fontWeight: 700,
          fontSize: "20px",
          fontFamily: "Poppins, sans-serif",
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
              color: "#ffffff",
              textDecoration: "none",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
            }}
            onMouseEnter={(e) => (e.target.style.color = CORAL)}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
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
          "linear-gradient(135deg, #0f172a 0%, #0f2444 50%, #0a3060 100%)",
        minHeight: "540px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "60px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "680px", padding: "0 24px" }}>
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "20px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Aprende <span style={{ color: CORAL }}>React</span> desde cero
        </h1>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "17px",
            lineHeight: 1.65,
            marginBottom: "36px",
            fontFamily: "Poppins, sans-serif",
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
            padding: "15px 40px",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
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
    icon: "📁",
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
        padding: "28px 24px",
        flex: "1 1 0",
        minWidth: 0,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div style={{ fontSize: "36px", lineHeight: 1 }}>{icon}</div>
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#1a202c",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#718096",
          fontSize: "14px",
          lineHeight: 1.6,
          fontFamily: "Poppins, sans-serif",
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
            fontFamily: "Poppins, sans-serif",
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 800,
              color: "#1a202c",
              fontFamily: "Poppins, sans-serif",
              marginBottom: "10px",
            }}
          >
            Nuestros Cursos
          </h2>
          <p
            style={{
              color: "#718096",
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
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
    fontFamily: "Poppins, sans-serif",
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
          fontFamily: "Poppins, sans-serif",
          marginBottom: "12px",
        }}
      >
        ¿Cuántos estudiantes van a inscribirse?
      </h2>
      <p
        style={{
          color: "#94a3b8",
          fontSize: "16px",
          fontFamily: "Poppins, sans-serif",
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
              fontFamily: "Poppins, sans-serif",
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

      <p style={{ color: "#94a3b8", fontSize: "15px", fontFamily: "Poppins, sans-serif" }}>
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
      <p style={{ color: "#94a3b8", fontSize: "14px", fontFamily: "Poppins, sans-serif" }}>
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>
      <div style={{ fontFamily: "Poppins, sans-serif" }}>
        <Navbar />
        <Hero />
        <CoursesSection />
        <Counter />
        <Footer />
      </div>
    </>
  );
}
