import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        background: "#1e293b",
        padding: "12px 25px",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Link
        to="/"
        style={{ color: "#38bdf8", textDecoration: "none", fontWeight: "bold" }}
      >
        🏠 Ana Sayfa (Sayaç)
      </Link>
      <Link
        to="/geribildirim"
        style={{ color: "#38bdf8", textDecoration: "none", fontWeight: "bold" }}
      >
        💬 Geri Bildirim
      </Link>
    </nav>
  );
}
