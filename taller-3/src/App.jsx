import { Routes, Route } from "react-router";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import Home     from "./views/Home";
import Cursos   from "./views/Cursos";
import Nosotros from "./views/Nosotros";
import Login    from "./views/Login";
import NotFound from "./views/NotFound";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/"         element={<Layout><Home /></Layout>} />
      <Route path="/cursos"   element={<Layout><Cursos /></Layout>} />
      <Route path="/nosotros" element={<Layout><Nosotros /></Layout>} />
      {/* Login es standalone — sin Navbar ni Footer */}
      <Route path="/login"    element={<Login />} />
      <Route path="*"         element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}