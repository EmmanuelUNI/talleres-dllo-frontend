import { useState } from "react";
import { Link } from "react-router";

const CORAL = "#e94560";
const LIGHT_BG = "#f3f4f6";

const courses = [
  {
    icon: "⚛️",
    title: "React Básico",
    desc: "Aprende los fundamentos: componentes, props, estado y manejo de eventos. El punto de partida ideal para cualquier desarrollador.",
    badge: "Principiante",
    duracion: "8 horas",
    lecciones: 24,
    temas: ["Componentes", "Props", "useState", "Eventos", "JSX"],
  },
  {
    icon: "🔁",
    title: "React Hooks",
    desc: "Domina useState, useEffect, useRef, useContext y aprende a construir tus propios custom hooks reutilizables.",
    badge: "Intermedio",
    duracion: "10 horas",
    lecciones: 30,
    temas: ["useEffect", "useRef", "useContext", "Custom Hooks", "useMemo"],
  },
  {
    icon: "🗂️",
    title: "Estado Global",
    desc: "Gestiona el estado de aplicaciones complejas con Context API. Aprende cuándo y cómo estructurar el estado global.",
    badge: "Intermedio",
    duracion: "9 horas",
    lecciones: 26,
    temas: ["Context API", "useReducer", "Patrones", "Performance", "DevTools"],
  },
  {
    icon: "🚀",
    title: "React Avanzado",
    desc: "Lleva tus apps al siguiente nivel: lazy loading, memoización, patrones de arquitectura y optimización de rendimiento.",
    badge: "Avanzado",
    duracion: "14 horas",
    lecciones: 42,
    temas: ["Lazy Loading", "React.memo", "Code Splitting", "Testing", "Arquitectura"],
  },
];

const niveles = ["Todos", "Principiante", "Intermedio", "Avanzado"];

const badgeColors = {
  Principiante: { bg: "#e6f4ea", color: "#2d7a45" },
  Intermedio:   { bg: "#fff3cd", color: "#856404" },
  Avanzado:     { bg: "#fce8e8", color: "#c0392b" },
};

function CourseCard({ icon, title, desc, badge, duracion, lecciones, temas }) {
  const { bg, color } = badgeColors[badge];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "36px 28px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.14)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
      }}
    >
      {/* Icono + badge */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <span style={{ fontSize: "48px", lineHeight: 1 }}>{icon}</span>
        <span
          style={{
            backgroundColor: bg,
            color: color,
            borderRadius: "50px",
            padding: "6px 14px",
            fontSize: "13px",
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
          }}
        >
          {badge}
        </span>
      </div>

      {/* Título */}
      <h3
        style={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#1a202c",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      {/* Descripción */}
      <p
        style={{
          color: "#666666",
          fontSize: "16px",
          lineHeight: 1.65,
          fontFamily: "Arial, sans-serif",
          flex: 1,
        }}
      >
        {desc}
      </p>

      {/* Temas */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {temas.map((t) => (
          <span
            key={t}
            style={{
              backgroundColor: "#f3f4f6",
              color: "#444444",
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "13px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Metadata */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          paddingTop: "16px",
          borderTop: "1px solid #e8e8e8",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          color: "#999999",
        }}
      >
        <span>🕐 {duracion}</span>
        <span>📋 {lecciones} lecciones</span>
      </div>

      {/* CTA */}
      <Link
        to="/login"
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: CORAL,
          color: "#ffffff",
          borderRadius: "50px",
          padding: "14px",
          fontSize: "16px",
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
          textDecoration: "none",
          transition: "background-color 0.15s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e03347")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = CORAL)}
      >
        Comenzar curso
      </Link>
    </div>
  );
}

/* ── Vista /cursos ────────────────────────────── */
export default function Cursos() {
  const [filtro, setFiltro] = useState("Todos");

  const filtrados =
    filtro === "Todos" ? courses : courses.filter((c) => c.badge === filtro);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header — mismo gradiente del Taller 2 */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #161f3b 50%, #0a3060 100%)",
          padding: "80px 48px 64px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Nuestros <span style={{ color: CORAL }}>Cursos</span>
        </h1>
        <p style={{ color: "#aaaaaa", fontSize: "22px", fontFamily: "Arial, sans-serif" }}>
          Elige el camino que mejor se adapte a tu nivel
        </p>
      </section>

      {/* Tabs de filtro por nivel (Semana 7: Patrones UX — Tabs) */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: "2px solid #e8e8e8", padding: "0 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex" }}>
          {niveles.map((nivel) => (
            <button
              key={nivel}
              role="tab"
              aria-selected={filtro === nivel}
              onClick={() => setFiltro(nivel)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                borderBottom: filtro === nivel ? `3px solid ${CORAL}` : "3px solid transparent",
                color: filtro === nivel ? CORAL : "#666666",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                fontWeight: filtro === nivel ? 700 : 400,
                padding: "18px 24px",
                cursor: "pointer",
                marginBottom: "-2px",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => { if (filtro !== nivel) e.currentTarget.style.color = CORAL; }}
              onMouseLeave={(e) => { if (filtro !== nivel) e.currentTarget.style.color = "#666666"; }}
            >
              {nivel}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de cursos */}
      <section style={{ backgroundColor: LIGHT_BG, padding: "56px 48px 80px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {filtrados.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
        {filtrados.length === 0 && (
          <p style={{ textAlign: "center", color: "#999999", fontSize: "18px", fontFamily: "Arial, sans-serif" }}>
            No hay cursos para este nivel aún.
          </p>
        )}
      </section>
    </div>
  );
}
