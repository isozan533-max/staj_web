import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        marginBottom: "20px",
        background: theme === "dark" ? "#1e293b" : "#e2e8f0",
        padding: "12px 25px",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <Link
          to="/"
          style={{
            color: theme === "dark" ? "#38bdf8" : "#0284c7",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🏠 Ana Sayfa
        </Link>
        <Link
          to="/geribildirim"
          style={{
            color: theme === "dark" ? "#38bdf8" : "#0284c7",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          💬 Geri Bildirim
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        style={{
          padding: "8px 14px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          background: theme === "dark" ? "#f8fafc" : "#0f172a",
          color: theme === "dark" ? "#0f172a" : "#f8fafc",
        }}
      >
        {theme === "dark" ? "☀️ Aydınlık Mod" : "🌙 Karanlık Mod"}
      </button>
    </nav>
  );
}
