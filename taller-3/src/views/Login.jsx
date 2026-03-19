import { useState } from "react";
import { Link, useNavigate } from "react-router";

const CORAL = "#e94560";

export default function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [enviado, setEnviado]   = useState(false);
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  const camposLlenos  = email.trim().length > 0 && password.length > 0;
  const deshabilitado = enviando || enviado;

  function handleSubmit() {
    if (!camposLlenos || deshabilitado) return;
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 1500);
  }

  const inputStyle = (disabled) => ({
    width: "100%",
    padding: "12px 16px",
    border: "1.5px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
    color: "#1a202c",
    backgroundColor: disabled ? "#f7f7f7" : "#ffffff",
    cursor: disabled ? "not-allowed" : "text",
    outline: "none",
    boxSizing: "border-box",
  });

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #161f3b 50%, #0a3060 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      {/* ── Botón volver ── */}
      <button
        onClick={() => navigate(-1)}
        title="Volver"
        style={{
          position: "absolute",
          top: "28px",
          left: "28px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#ffffff",
          fontSize: "20px",
          transition: "background 0.15s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.16)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      >
        ←
      </button>

      {/* ── Card ── */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "18px",
          padding: "48px 40px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Título */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#1a202c",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Ingresar
        </h1>

        {/* Campo email */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: 600,
              color: "#1a202c",
              marginBottom: "6px",
            }}
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={deshabilitado}
            placeholder="tu@email.com"
            style={inputStyle(deshabilitado)}
            onFocus={(e) => (e.currentTarget.style.borderColor = CORAL)}
            onBlur={(e)  => (e.currentTarget.style.borderColor = "#e2e8f0")}
          />
        </div>

        {/* Campo password */}
        <div style={{ marginBottom: "28px" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: 600,
              color: "#1a202c",
              marginBottom: "6px",
            }}
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={deshabilitado}
            placeholder="Tu contraseña"
            style={inputStyle(deshabilitado)}
            onFocus={(e) => (e.currentTarget.style.borderColor = CORAL)}
            onBlur={(e)  => (e.currentTarget.style.borderColor = "#e2e8f0")}
          />
        </div>

        {/* Botón */}
        <button
          onClick={handleSubmit}
          disabled={!camposLlenos || deshabilitado}
          style={{
            width: "100%",
            padding: "16px",
            backgroundColor: !camposLlenos || deshabilitado ? "#cccccc" : CORAL,
            color: !camposLlenos || deshabilitado ? "#888888" : "#ffffff",
            border: "none",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
            cursor: !camposLlenos || deshabilitado ? "not-allowed" : "pointer",
            transition: "background-color 0.15s ease",
            marginBottom: "16px",
          }}
          onMouseEnter={(e) => {
            if (camposLlenos && !deshabilitado)
              e.currentTarget.style.backgroundColor = "#e03347";
          }}
          onMouseLeave={(e) => {
            if (camposLlenos && !deshabilitado)
              e.currentTarget.style.backgroundColor = CORAL;
          }}
        >
          {enviando ? "Ingresando…" : enviado ? "✓ Ingresado" : "Ingresar"}
        </button>

        {/* Feedback */}
        {enviado && (
          <p
            style={{
              textAlign: "center",
              color: "#38a169",
              fontSize: "15px",
              marginBottom: "16px",
            }}
          >
            ✅ Formulario enviado correctamente (simulación)
          </p>
        )}

        {/* Link a cursos */}
        <p style={{ textAlign: "center", color: "#888888", fontSize: "14px" }}>
          ¿No tienes cuenta?{" "}
          <Link
            to="/cursos"
            style={{ color: CORAL, fontWeight: 600, textDecoration: "underline" }}
          >
            Ver cursos
          </Link>
        </p>
      </div>
    </div>
  );
}