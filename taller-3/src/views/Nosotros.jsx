const CORAL = "#e94560";
const LIGHT_BG = "#f3f4f6";

const valores = [
  {
    icon: "🎯",
    title: "Enfoque práctico",
    desc: "Cada lección está diseñada para que construyas algo real. Creemos que se aprende haciendo, no solo leyendo.",
  },
  {
    icon: "📈",
    title: "Progresión clara",
    desc: "Desde los fundamentos hasta patrones avanzados. Cada curso continúa donde el anterior terminó.",
  },
  {
    icon: "🤝",
    title: "Comunidad activa",
    desc: "No aprendes solo. Detrás de cada lección hay una comunidad dispuesta a responder y crecer contigo.",
  },
  {
    icon: "⚡",
    title: "Contenido actualizado",
    desc: "El ecosistema de React evoluciona rápido. Nos aseguramos de que nuestro material refleje las prácticas actuales.",
  },
];

const stats = [
  { value: "+4.800", label: "Estudiantes activos" },
  { value: "96%",   label: "Tasa de finalización" },
  { value: "4",     label: "Cursos disponibles" },
  { value: "3 años", label: "En el mercado" },
];

export default function Nosotros() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* ── Header ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #161f3b 50%, #0a3060 100%)",
          padding: "80px 48px 80px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          Sobre <span style={{ color: CORAL }}>ReactAcademy</span>
        </h1>
        <p
          style={{
            color: "#aaaaaa",
            fontSize: "22px",
            lineHeight: 1.65,
            maxWidth: "640px",
            margin: "0 auto",
          }}
        >
          Somos una plataforma educativa creada para que cualquier persona pueda
          aprender React de manera estructurada, a su propio ritmo y sin rodeos.
        </p>
      </section>

      {/* ── Historia ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "72px 48px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "38px",
              fontWeight: 600,
              color: "#1a202c",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            ¿Quiénes somos?
          </h2>
          <p
            style={{
              color: "#555555",
              fontSize: "19px",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            ReactAcademy nació de una necesidad concreta: encontrar un lugar donde
            aprender React de verdad, con ejemplos reales y una progresión que tenga
            sentido. Los recursos existentes eran o demasiado básicos o demasiado
            dispersos.
          </p>
          <p
            style={{
              color: "#555555",
              fontSize: "19px",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Hoy somos un equipo pequeño pero enfocado, con experiencia en desarrollo
            frontend y en diseño de contenido educativo. Cada curso que publicamos
            pasa por revisión técnica y pedagógica antes de estar disponible.
          </p>
          <p
            style={{
              color: "#555555",
              fontSize: "19px",
              lineHeight: 1.8,
            }}
          >
            Trabajamos de manera remota y colaboramos con desarrolladores activos en
            la industria para asegurarnos de que lo que enseñamos refleje lo que se
            usa hoy en proyectos reales.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ backgroundColor: "#1a1a2e", padding: "64px 48px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p
                style={{
                  fontSize: "46px",
                  fontWeight: 700,
                  color: CORAL,
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p style={{ color: "#aaaaaa", fontSize: "16px" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Valores ── */}
      <section style={{ backgroundColor: LIGHT_BG, padding: "72px 48px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 600,
                color: "#1a202c",
                marginBottom: "16px",
              }}
            >
              Cómo trabajamos
            </h2>
            <p style={{ color: "#777777", fontSize: "20px" }}>
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "32px",
            }}
          >
            {valores.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  padding: "36px 28px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <span style={{ fontSize: "40px", lineHeight: 1 }}>{icon}</span>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#1a202c",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#666666", fontSize: "16px", lineHeight: 1.65 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Misión ── */}
      <section
        style={{
          backgroundColor: "#1a1a2e",
          padding: "80px 48px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#ffffff",
            marginBottom: "24px",
          }}
        >
          Nuestra misión
        </h2>
        <p
          style={{
            color: "#aaaaaa",
            fontSize: "21px",
            lineHeight: 1.7,
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          Democratizar el aprendizaje del desarrollo frontend. Creemos que cualquier
          persona con motivación puede convertirse en un desarrollador React competente
          con la guía y los recursos correctos.
        </p>
      </section>
    </div>
  );
}