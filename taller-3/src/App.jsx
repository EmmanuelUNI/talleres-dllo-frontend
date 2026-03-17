import { Routes, Route } from "react-router";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import Home     from "./views/Home";
import Cursos   from "./views/Cursos";
import Nosotros from "./views/Nosotros";
import Login    from "./views/Login";
import NotFound from "./views/NotFound";

/* Layout compartido: Navbar visible en TODAS las rutas (requisito del taller) */
function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

/*
 * Rutas obligatorias (Taller 03):
 *   /          → Home (Hero + Cursos + Counter del Taller 2)
 *   /cursos    → Cursos
 *   /nosotros  → Nosotros
 *   /login     → Login (solo UI, sin auth real)
 *   *          → 404
 */
export default function App() {
  return (
    <Routes>
      <Route path="/"         element={<Layout><Home /></Layout>} />
      <Route path="/cursos"   element={<Layout><Cursos /></Layout>} />
      <Route path="/nosotros" element={<Layout><Nosotros /></Layout>} />
      <Route path="/login"    element={<Layout><Login /></Layout>} />
      <Route path="*"         element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}
