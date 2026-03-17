import { NavLink, Link } from "react-router";

const CORAL = "#e94560";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
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
      <Link
        to="/"
        style={{
          color: CORAL,
          fontWeight: 700,
          fontSize: "32px",
          fontFamily: "Arial, sans-serif",
          letterSpacing: "-0.3px",
          textDecoration: "none",
        }}
      >
        ReactAcademy
      </Link>

      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {/* Links de navegación — NavLink en vez de <a href="#"> */}
        {[
          { label: "Inicio",   to: "/",         end: true },
          { label: "Cursos",   to: "/cursos" },
          { label: "Nosotros", to: "/nosotros" },
        ].map(({ label, to, end }) => (
          <NavLink
            key={label}
            to={to}
            end={end}
            style={({ isActive }) => ({
              color: isActive ? CORAL : "#cac5bf",
              textDecoration: "none",
              fontFamily: "Arial, sans-serif",
              fontSize: "20px",
              fontWeight: isActive ? 600 : 400,
            })}
            onMouseEnter={(e) => (e.currentTarget.style.color = CORAL)}
            onMouseLeave={(e) => {
              const active = e.currentTarget.getAttribute("aria-current") === "page";
              e.currentTarget.style.color = active ? CORAL : "#cac5bf";
            }}
          >
            {label}
          </NavLink>
        ))}

        {/* Botón Ingresar → /login (nueva ruta del Taller 03) */}
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#c73650" : CORAL,
            color: "#ffffff",
            textDecoration: "none",
            fontFamily: "Arial, sans-serif",
            fontSize: "17px",
            fontWeight: 700,
            borderRadius: "50px",
            padding: "10px 24px",
            display: "inline-block",
          })}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e03347")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = CORAL)}
        >
          Ingresar
        </NavLink>
      </div>
    </nav>
  );
}
