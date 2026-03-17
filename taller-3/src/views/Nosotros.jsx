const CORAL = "#e94560";
const LIGHT_BG = "#f3f4f6";

const team = [
  {
    icon: "👩‍💻",
    name: "Ana García",
    role: "Instructora Principal",
    desc: "Frontend engineer con 8 años de experiencia en React.",
  },
  {
    icon: "👨‍🏫",
    name: "Carlos Mendez",
    role: "Instructor Avanzado",
    desc: "Arquitecto de software especializado en aplicaciones de alto rendimiento.",
  },
  {
    icon: "🎨",
    name: "Laura Torres",
    role: "Mentora UX/UI",
    desc: "Diseñadora y desarrolladora. Combina diseño con código.",
  },
];

/* ── Vista /nosotros ──────────────────────────── */
export default function Nosotros() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header — mismo gradiente que el Hero del Taller 2 */}
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
            fontFamily: "Arial, sans-serif",
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
            fontFamily: "Arial, sans-serif",
          }}
        >
          Somos una plataforma educativa enfocada en enseñar React de forma
          práctica, progresiva y accesible para todos los niveles.
        </p>
      </section>

      {/* Equipo — mismo fondo claro de la sección de cursos */}
      <section style={{ backgroundColor: LIGHT_BG, padding: "72px 48px 80px" }}>
        <div style={{ maxWidth: "1610px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 600,
                color: "#1a202c",
                fontFamily: "Arial, sans-serif",
                marginBottom: "16px",
              }}
            >
              Nuestro Equipo
            </h2>
            <p style={{ color: "#777777", fontSize: "21.3px", fontFamily: "Arial, sans-serif" }}>
              Las personas detrás de ReactAcademy
            </p>
          </div>

          <div style={{ display: "flex", gap: "40px" }}>
            {team.map(({ icon, name, role, desc }) => (
              <div
                key={name}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  padding: "44px 24px",
                  flex: "1 1 0",
                  minWidth: 0,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "53px", lineHeight: 1 }}>{icon}</div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#1a202c", fontFamily: "Arial, sans-serif" }}>
                  {name}
                </h3>
                <span
                  style={{
                    backgroundColor: CORAL,
                    color: "#ffffff",
                    borderRadius: "50px",
                    padding: "8px 18px",
                    fontSize: "15px",
                    fontWeight: 600,
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {role}
                </span>
                <p style={{ color: "#777777", fontSize: "18px", lineHeight: 1.6, fontFamily: "Arial, sans-serif" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión — mismo fondo oscuro del Counter en Taller 2 */}
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
            fontFamily: "Arial, sans-serif",
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
            fontFamily: "Arial, sans-serif",
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
